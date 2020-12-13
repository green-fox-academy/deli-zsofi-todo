

class TodoElement {
    lineNumber;
    content;
    status;

    constructor(lineNumber, status, content ) {
    this.content = content;
    this.lineNumber = lineNumber;
    this.status = status;
    }
    listing() {
        return `${this.lineNumber} - [ ${this.status ? 'x' : ' '} ] ${this.content} `
    }
  
};
export { TodoElement }