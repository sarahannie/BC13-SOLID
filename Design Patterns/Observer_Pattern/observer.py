from abc import ABC, abstractmethod
# The Observer Design Pattern

# Vision Group
    # New Vision: English News Paper
    # Bukedde: Local News Paper

# Observer (Subscriber / Reader)
class Subscriber(ABC):

    @abstractmethod
    def update(self, updates):
        pass

class NewVisionReader(Subscriber):
    def update(self, updates):
        print(updates)

class BukeddeReader(Subscriber):
    def update(self, updates):
        print(updates)

# Observable (Publisher Template)
class Publisher():
    
    def __init__(self):
        self.state = {}
        self.subscribers = []
    
    def subscribe(self, subscriber):
        self.subscribers.append(subscriber)

    def unsubscribe(self, subscriber):
        # Mechanism for removing an item from a list
        pass

    def __notify(self, updates):
        for subscriber in self.subscribers:
            subscriber.update(updates)
    
    def publish(self, news):
        self.state = news
        self.__notify(self.state)


# Create Observable Objects (Actual Publishers)
new_vision = Publisher()
bukedde = Publisher()

# Create Observer (Actual Subscriber/Readers)
reader_1 = NewVisionReader()
reader_2 = NewVisionReader()
reader_3 = NewVisionReader()
reader_4 = NewVisionReader()
reader_5 = NewVisionReader()

omusomi_1 = BukeddeReader()
omusomi_2 = BukeddeReader()
omusomi_3 = BukeddeReader()
omusomi_4 = BukeddeReader()
omusomi_5 = BukeddeReader()

# Subscribe Readers
new_vision.subscribe(reader_1)
new_vision.subscribe(reader_2)
new_vision.subscribe(reader_3)
new_vision.subscribe(reader_4)
new_vision.subscribe(reader_5)

bukedde.subscribe(omusomi_1)
bukedde.subscribe(omusomi_2)
bukedde.subscribe(omusomi_3)
bukedde.subscribe(omusomi_4)
bukedde.subscribe(omusomi_5)

# Publish News
new_vision_news = {
    'headline': "DNA Debate heats up!",
    'body': "Today in Ugandanda, the only................",
    'author': 'Lady Charllote'
}

bukedde_news = {
    'omutwe': "Ebya Kenzo bibi!",
    'ekinyusi': "Diiru ye eya Federesoni egudde butaka................",
    'omusasi': 'A. Kasozi'
}

new_vision.publish(new_vision_news)
bukedde.publish(bukedde_news)
