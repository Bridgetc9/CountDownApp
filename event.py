class Event:

    def __init__(self, targetDate, description, tag):
        """
        recurring
        tag is category
        """
        self.date = targetDate
        self.description = description
        self.tag = tag


    def change_date(self, newDate):
        self.date = newDate
