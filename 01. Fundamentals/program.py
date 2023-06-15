from abc import ABC, abstractmethod

class User():
    def __init__(self):
        self.username = 'johndoe'
        self.password = 'password'


class Computer(ABC):

    def __init__(self):
        # Fields
        self.brand = ""
        self.model = ""
        self.user = User()

    # Methods
    def input(self):
        print("---- Input Process ------------------")
        print("Step1: Listen to data from keyboard")
        print("Step2: Pick data from Keyboard")
        print("Step3: Locate current cursor position")
        print("Step4: Place data in the current cursor position")
        print("Step5: Start Listening to data from keyboard")
        print("") # Empty Print statement at end of every method
    
    @abstractmethod
    def process(self, data, operation):
        pass
    
    def store(self, data):
        print("---- Storage Process ------------------")
        print("Step1: Receive data to be stored")
        print("Step2: Open Internal memory where data is to stored")
        print("Step3: Prepare for data storage operation")
        print("Step4: Launch storage operation")
        print("Step5: Send back signal representing the state of the storage operation")
        print("") # Empty Print statement at end of every method
        return True
    
    def output(self):
        print("---- Output Process ------------------")
        print("Step1: Receive data to be output")
        print("Step2: Open monitor where data is to displayed")
        print("Step3: Prepare for data output operation")
        print("Step4: Launch output operation")
        print("Step5: Send back signal representing the state of the output operation")
        print("") # Empty Print statement at end of every method

# Inheritance: Desktop is inheriting from Computer
class Desktop(Computer):
    # Fields

    # Methods
    def process(self, data, operation):
        print("---- Processing in Desktop Computer ------------------")
        print("Step1: Receive data to be processed")
        print("Step2: Receive operation to carry out on data received") 
        print("Step3: Prepare for operation") 
        print("Step4: Launch operation")
        print("Step5: Send back signal representing the state of the operation")
        print("") # Empty Print statement at end of every method


# Inheritance: Laptop is inheriting from Computer
class Laptop(Computer):
    # Fields
    # Methods
    def process(self, data, operation):
        print("---- Processing in Laptop Computer ------------------")
        print("Step1: Receive data to be processed")
        print("Step2: Receive operation to carry out on data received") 
        print("Step3: Prepare for operation") 
        print("Step4: Launch operation")
        print("Step5: Send back signal representing the state of the operation")
        print("") # Empty Print statement at end of every method

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

    def process(self, data, operation):
        print("---- Processing in Walltop Computer ------------------")
        print("Step1: Receive data to be processed")
        print("Step2: Receive operation to carry out on data received") 
        print("Step3: Prepare for operation") 
        print("Step4: Launch operation")
        print("Step5: Send back signal representing the state of the operation")
        print("") # Empty Print statement at end of every method


computer = Desktop()
print(computer.user.username)
computer.process('s','d')

computer = Laptop()
print(computer.user.username)
computer.process('s','d')

computer = Walltop()
print(computer.user.username)
computer.process('s','d')


# my_laptop = Laptop()
# my_laptop.input()
# my_laptop.process(12, "hop")
# my_laptop.store("one")
# my_laptop.output()
# my_laptop.fold()
