from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import date

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    date = db.Column(db.Date, nullable=False)
    content = db.Column(db.String(200))
    recur = db.Column(db.String(10))


    def active_date(self):
        if self.recur and self.date < date.today():
            self.date = date(self.date.year + 1, self.date.month, self.date.day)
        return self.date


    def days_left(self):
        return (self.date - date.today()).days

    def __repr__(self):
        return 'Event {}'.format(self.id)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/events', methods=['POST', 'GET']) #methods?
def events():
    if request.method == 'POST':
        event_name = request.form['event-name']
        date_list = [int(d) for d in request.form['event-date'].split('-')]
        event_date = date(date_list[0], date_list[1], date_list[2])
        event_content = request.form['event-describe']
        event_recur = request.form['event-recur'] if 'event-recur' in request.form else None
        new_event = Event(name=event_name, date=event_date, content=event_content, recur=event_recur) #
        if event_date < date.today():
            return "Your date should be in the future!"
        try:
            db.session.add(new_event)
            db.session.commit()
            return redirect('/events')
        except:
            return "There was an issue adding your event."
    else:
        events = Event.query.order_by(Event.date).all()
        return render_template('Events.html', events=events)


@app.route('/sign_up') #methods?
def sign_up():
    return render_template('Sign.html')


@app.route('/events/delete/<int:id>')
def delete(id):
    event_to_delete = Event.query.get_or_404(id)
    try:
        db.session.delete(event_to_delete)
        db.session.commit()
        return redirect('/events')
    except:
        return "There was an issue deleting your event."


@app.route('/events/edit/<int:id>', methods=['GET', 'POST'])
def edit(id):
    targ_event = Event.query.get_or_404(id)
    events = Event.query.order_by(Event.date).all()
    if request.method == 'POST':
        event_name = request.form['event-name']
        date_list = [int(d) for d in request.form['event-date'].split('-')]
        event_date = date(date_list[0], date_list[1], date_list[2])
        event_content = request.form['event-describe']
        event_recur = request.form['event-recur'] if 'event-recur' in request.form else None
        targ_event.name, targ_event.date = event_name, event_date
        targ_event.content= event_content
        targ_event.recur = event_recur
        try:
            db.session.commit()
            return redirect("/events")
        except:
            return "There was an issue editing your event."
    else:
        return render_template('Edit.html', event=targ_event, events=events)


if __name__ == '__main__':
    app.run(debug=True)
