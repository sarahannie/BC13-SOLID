
class Computer():

    def __init__(self):
        # Fields
        self.brand = ""
        self.model = ""

    # Methods
    def input(self):
        print("---- Input Process ------------------")
        print("Step1: Listen to data from keyboard")
        print("Step2: Pick data from Keyboard")
        print("Step3: Locate current cursor position")
        print("Step4: Place data in the current cursor position")
        print("Step5: Start Listening to data from keyboard")
        print("") # Empty Print statement at end of every method
    
    def process(self, data, operation):
        print("---- Processing ------------------")
        print("Step1: Receive data to be processed")
        print("Step2: Receive operation to carry out on data received") 
        print("Step3: Prepare for operation") 
        print("Step4: Launch operation")
        print("Step5: Send back signal representing the state of the operation")
        print("") # Empty Print statement at end of every method
        return True
    
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

my_computer = Computer()
my_computer.input()
my_computer.process(12, "hop")
my_computer.store("one")
my_computer.output()