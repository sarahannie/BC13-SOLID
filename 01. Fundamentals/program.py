from abc import ABC, abstractmethod

class User():
    def __init__(self):
        self.username = 'johndoe'
        self.password = 'password'

class ProcessorChip(ABC):
    @abstractmethod
    def process(self, data):
        pass

class Intel(ProcessorChip):
    def process(self, data):
        print("---- Proceessing using Intel Chip ------------------")
        print("") # Empty Print statement at end of every method

class AMD(ProcessorChip):
    def process(self, data):
        print("---- Proceessing using AMD Chip ------------------")
        print("") # Empty Print statement at end of every method

class INVIDIA(ProcessorChip):
    def process(self, data):
        print("---- Proceessing using AMD Invidia ------------------")
        print("") # Empty Print statement at end of every method

class Computer(ABC):

    def __init__(self, processor_chip):
        # Fields
        self.brand = ""
        self.model = ""
        self.user = User()
        self.processor_chip = processor_chip

    # Methods
    def input(self, data, device):
        if device == 'keyboard':
            print("---- Inputing data from keyboard ------------------")
            print("Step1: Listen to data from keyboard")
            print("Step2: Pick data from Keyboard")
            print("Step3: Locate current cursor position")
            print("Step4: Place data in the current cursor position")
            print("Step5: Start Listening to data from keyboard")
            print("") # Empty Print statement at end of every method
        elif device == 'mouse':
            print("---- Inputing data from mouse ------------------")
            print("Step1: Listen to data from mouse")
            print("Step2: Pick data from mouse")
            print("Step3: Locate current cursor position")
            print("Step4: Place data in the current cursor position")
            print("Step5: Start Listening to data from mouse")
            print("") # Empty Print statement at end of every method
        else:
            pass
    
    def process(self, data):
        self.processor_chip.process(data)
    
    def store(self, data):
        print("---- Storage Process ------------------")
        print("Step1: Receive data to be stored")
        print("Step2: Open Internal memory where data is to stored")
        print("Step3: Prepare for data storage operation")
        print("Step4: Launch storage operation")
        print("Step5: Send back signal representing the state of the storage operation")
        print("") # Empty Print statement at end of every method
        return True
    
    def output(self, data, device):
        if device == 'monitor':
            print("---- Inputing data from Monitor ------------------")
            print("") # Empty Print statement at end of every method
        elif device == 'projector':
            print("---- Inputing data from Projector ------------------")
            print("") # Empty Print statement at end of every method
        else:
            pass

# Inheritance: Desktop is inheriting from Computer
class Desktop(Computer):
    # Fields
    pass

    # Methods

# Inheritance: Laptop is inheriting from Computer
class Laptop(Computer):
    # Fields
    # Methods
    pass

    def fold(self):
        print("-----------Folding Process ----------")
        print("Step1: Folding")
        print("")

# Inheritance: Walltop is inheriting from Computer
class Walltop(Computer):
    # Fields

    # Methods
    # Method Overriding
    def input(self):
        print("---- Input Process using Screen Tourch ------------------")
        print("Step1: Listen to data from Screen")
        print("Step2: Pick data from Screen")
        print("Step3: Locate current tourch position")
        print("Step4: Place data in the current tourch position")
        print("Step5: Start Listening to data from Screen")
        print("") # Empty Print statement at end of every method


computer = Desktop(INVIDIA())
computer.input('s','mouse')

computer = Laptop(AMD())
computer.input('s','keyboard')

computer = Walltop(AMD())
computer.process('s')


# my_laptop = Laptop()
# my_laptop.input()
# my_laptop.process(12, "hop")
# my_laptop.store("one")
# my_laptop.output()
# my_laptop.fold()

