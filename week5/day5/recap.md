We've spent a fair bit of time talking about OO. There's a lot more that we could cover, but it's time to reflect on what we've learned.

# Recap

Object Oriented Programming (OOP) is a programming paradigm where we use objects to encapsulate (group) data and behaviour. These two things become properties of those objects.

# Why do we do this? What's it all for?

- To reduce duplicated code (reusability)
- To break code up into sensibly-divided units (modularity)

Why do we need to do that? Because real software gets big (tens of thousands of lines of code or more); having a paradigm to give us conventions and techniques to organize and manage the code is paramount!

OOP does not need classes!

> OOP by itself does not require the use of classes.

We saw an example of this in the Todo List Exercise where we did not use classes and instead defined a newTask(..) function which returned a new task instance each time it was called.

JavaScript predominantly did things this way (it also uses Prototypes but we are skipping that for now) until ES6 came along and introduced the class keyword. It does this by mimicking class-based OO languages (also known as Classical OO languages) such as Java and Ruby.

Most of our efforts were spent building up to and then learning the Classical style of OOP due to its popularity in software development today. It's hard to escape and generally liked.

Summary of OOP features that we covered:
We learned the following features about Classical OOP:

> A class is a blueprint from which instances of objects can be created (i.e. newTask vs a task)
> Classes have data in the form of value properties and behaviour in the form of methods
> Classes can inherit behaviour from other classes using the extends keyword
> Subclasses can override methods that are inherited in their superclass
> JavaScript also gives us get and set keywords to more cleverly define methods that are data getters and setters
> Like with any technique, there are good and bad ways to use them. One could easily write OOP code in a way that accomplishes the opposite of those goals, in fact. That's where experience and practice comes into play, and you'll be getting more of that in the final project and upcoming material.

Have fun!
