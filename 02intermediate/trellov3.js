let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    addMeeting: function () {
        console.log(this);
    }
}  
myTodos.addMeeting();
let myTodosTwo = {
    day: 'Tuesday',
    meetings: 0,
    meetDone: 0,
    addMeeting: function (num = 0) {
        this.meetings = this.meetings + num;
   },
   MeetingDone: function (num = 0) {
    this.meetings = this.meetings - num;
    },
    summary: function () {
        return `You have ${this.meetings}  meetings today`
    },
    resetDay: function () {
        todo.meetings = 0;
        todo.meetDone = 0;
    }
}  

myTodosTwo.addMeeting(4);
myTodosTwo.MeetingDone(2);
console.log(myTodosTwo.summary());

// Assignment 
// Handle meeting Done


