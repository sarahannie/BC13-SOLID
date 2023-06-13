class Computer {
  constructor(brand, model) {
    this.keyboard = {};
    this.brand = brand;
    this.internalMemory = [];
    this.processor = {};
    this.model = model;
  }

  input() {
    console.log("Step 1: Listen to data from keyboard");
    console.log("Step 2: Pick data from keyboard");
    console.log("Step 3: Locate current cursor position");
    console.log("Step 4: Place data to the current cursor position");
    console.log("Step 5: Start listening to data from keyboard");
  }

  process(data, operation) {
    console.log("Step 1: Receive data to be proceesed");
    console.log("Step 2: Receive operation to carry out on the data received");
    console.log("Step 3: Prepare for operation");
    console.log("Step 4: launch operation");
    console.log(
      "Step 5: Send back signal representing the state of the operation"
    );
  }
  store() {
    console.log("Step 1: Receive data to be stored");
    console.log("Step 2: Open internal memory where data is to be stored");
    console.log("Step 3: Prepare for data storage");
    console.log("Step 4: launch storage operation");
    console.log(
      "Step 5: Send back signal representing the state of the storage operation"
    );
  }
  output() {
    console.log("Step 1: Receive data to be output");
    console.log("Step 2: Open monitor where data is to be dispalyed");
    console.log("Step 3: Prepare for data output process");
    console.log("Step 4: launch output operation");
    console.log(
      "Step 5: Send back signal representing the state of the output operation"
    );
  }
}

const macBook = new Computer("Apple", "MacBook Pro");
console.log(macBook.brand);
macBook.input();
macBook.process("1234567", "Storage");
macBook.store();
macBook.output();
