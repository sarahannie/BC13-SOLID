from abc import ABC, abstractmethod


class User:
    def __init__(self):
        self.username = "johndoe"
        self.password = "password"


class InputDevice(ABC):
    @abstractmethod
    def input(self, data):
        pass


class Keyboard(InputDevice):
    def input(self, data):
        print("---- Inputing data from keyboard ------------------")
        print("Step1: Listen to data from keyboard")
        print("Step2: Pick data from Keyboard")
        print("Step3: Locate current cursor position")
        print("Step4: Place data in the current cursor position")
        print("Step5: Start Listening to data from keyboard")
        print("")  # Empty Print statement at end of every method


class Mouse(InputDevice):
    def input(self, data):
        print("---- Inputing data from mouse ------------------")
        print("Step1: Listen to data from mouse")
        print("Step2: Pick data from mouse")
        print("Step3: Locate current cursor position")
        print("Step4: Place data in the current cursor position")
        print("Step5: Start Listening to data from mouse")
        print("")  # Empty Print statement at end of every method


class TouchScreen(InputDevice):
    def input(self, data):
        print("---- Input Process using Screen Tourch ------------------")
        print("Step1: Listen to data from Screen")
        print("Step2: Pick data from Screen")
        print("Step3: Locate current tourch position")
        print("Step4: Place data in the current tourch position")
        print("Step5: Start Listening to data from Screen")
        print("")  # Empty Print statement at end of every method


class ProcessorChip(ABC):
    @abstractmethod
    def process(self, data):
        pass


class Intel(ProcessorChip):
    def process(self, data):
        print("---- Proceessing using Intel Chip ------------------")
        print("")  # Empty Print statement at end of every method


class AMD(ProcessorChip):
    def process(self, data):
        print("---- Proceessing using AMD Chip ------------------")
        print("")  # Empty Print statement at end of every method


class Nvidia(ProcessorChip):
    def process(self, data):
        print("---- Proceessing using Nvidia ------------------")
        print("")  # Empty Print statement at end of every method


class Memory(ABC):
    @abstractmethod
    def store(self, data):
        pass


class SSD(Memory):
    def store(self, data):
        print("storing data on SSD")


class InternalMemory(Memory):
    def store(self, data):
        print("---- Storage Process ------------------")
        print("Step1: Receive data to be stored")
        print("Step2: Open Internal memory where data is to stored")
        print("Step3: Prepare for data storage operation")
        print("Step4: Launch storage operation")
        print("Step5: Send back signal representing the state of the storage operation")
        print("")  # Empty Print statement at end of every method


class OutputDevice(ABC):
    @abstractmethod
    def output(self, data):
        pass


class Monitor(OutputDevice):
    def output(self, data):
        print("---- Outputing to Monitor ------------------")
        print("Step1: Receive data to be output")
        print("Step2: Open monitor where data is to displayed")
        print("Step3: Prepare for data output operation")
        print("Step4: Launch output operation")
        print("Step5: Send back signal representing the state of the output operation")
        print("")


class Projector(OutputDevice):
    def output(self, data):
        print("---- Outputing to Projector ------------------")
        print("Step1: Receive data to be output")
        print("Step2: Open projector where data is to displayed")
        print("Step3: Prepare for data output operation")
        print("Step4: Launch output operation")
        print("Step5: Send back signal representing the state of the output operation")
        print("")


class Computer(ABC):
    def __init__(self, input_device, processor_chip, memory, output_device):
        # Fields
        self.brand = ""
        self.model = ""
        self.user = User()
        self.input_device = input_device
        self.processor_chip = processor_chip
        self.memory = memory
        self.output_device = output_device

    # Methods
    def input(self, data):
        self.input_device.input(data)

    def process(self, data):
        self.processor_chip.process(data)  # delegation of one method to another

    def store(self, data):
        self.memory.store(data)

    def output(self, data):
        self.output_device.output(data)


# Inheritance: Desktop is inheriting from Computer
class Desktop(Computer):
    # Fields
    pass
    # Methods


# Inheritance: Laptop is inheriting from Computer
class Laptop(Computer):
    # Fields
    pass

    # Methods
    def fold(self):
        print("-----------Folding Process ----------")
        print("Step1: Folding")
        print("")


# Inheritance: Walltop is inheriting from Computer
class Walltop(Computer):
    # Fields
    pass


computer = Desktop(Keyboard(), Nvidia(), InternalMemory(), Projector())
computer.process("see")
computer.store("1")
computer.output("12")

computer = Laptop(Mouse(), AMD(), SSD(), Projector())
computer.input("soo")
computer.process("ts")
computer.store("2")
computer.output("12")

computer = Walltop(Keyboard(), Intel(), SSD(), Monitor())
computer.process("s")
computer.store("3")
computer.output("abs")


# my_laptop = Laptop()
# my_laptop.input()
# my_laptop.process(12, "hop")
# my_laptop.store("one")
# my_laptop.output()
# my_laptop.fold()
