class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(name, quantity) {
    const item = this.items.find(item => item.name === name);
    if (item) {
      item.quantity += quantity;
    } else {
      this.items.push({ name, quantity });
    }
    console.log(`${quantity} ${name}(s) added to inventory.`);
  }

  removeItem(name, quantity) {
    const item = this.items.find(item => item.name === name);
    if (item) {
      if (item.quantity >= quantity) {
        item.quantity -= quantity;
        console.log(`${quantity} ${name}(s) removed from inventory.`);
        if (item.quantity === 0) {
          this.items = this.items.filter(item => item.name !== name);
        }
      } else {
        console.log(`Not enough ${name}(s) in inventory to remove.`);
      }
    } else {
      console.log(`${name} not found in inventory.`);
    }
  }

  listItems() {
    if (this.items.length === 0) {
      console.log("Inventory is empty.");
    } else {
      console.log("Current inventory:");
      this.items.forEach(item => {
        console.log(`${item.name}: ${item.quantity}`);
      });
    }
  }
}