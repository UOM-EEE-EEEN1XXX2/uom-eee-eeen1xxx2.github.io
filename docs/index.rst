Introduction
============

Welcome to **EEEN1XXX2 Programming and software development**!

This is a first year undergraduate course that introduces students to both general purpose programming for task automation and data analysis, mainly using Python, and higher performance programming, mainly using Rust. We also cover software development processes, such as version control, to help students write secure, maintainable code. 

The course includes some of the theory behind how computers operate, both hardware and software. We go far enough into this for understanding parts of our code which are written a particular way, due to how the hardware and software of a computer works. 

EEEN1XXX2 is primarily an in-person course, run at the University of Manchester for students in Electrical and Electronic Engineering. Students enrolled at the University will have a number of timetabled lecture sessions to go over the material, and lab sessions to practice coding and get one-on-one help. 

The course materials are open source, and so also avaiable for others to follow online. If doing the course online, most parts of the course are avaiable to use. Less help is avaiable, and you won't have access to the assessed parts of the course (the in-lab assessments and end of course exam).  

These course notes are your main guide through the course. They are split into 4 parts.

- `Part 0 (this part) on course adminstration <https://uom-eee-eeen1xxx2.github.io/>`_. These overview the course administration: the intended learning outcomes and other information needed to work through the course. The notes also provide information on how to install a suitable programming environment for using with the course.

- `Part 1 on underlying theory of how computers operate <https://uom-eee-eeen1xxx2.github.io/notes-part1/>`_. Computers work in a particular way, and we need to know some details about they ways in which they work in order to write good programs. We don't need to know everything about how a computer works, but when programming we'll quickly find we can't treat them as a *black box*, and need to know a litte about what's going on in order to understand our programs. 

- `Part 2 on general purpose computing, mainly with Python <https://uom-eee-eeen1xxx2.github.io/notes-part2/>`_. These cover automating tasks on a computer, and using programming to analyse and explore and visuliase data. We'll mainly use Python for this, as a very widely used programming language, but will also look briefly at *Shell Scripting* as as a method built in to most operating systems. 

- `Part 3 on higher performance computing, mainly with Rust <https://uom-eee-eeen1xxx2.github.io/notes-part3/>`_. These cover writing programs that can run more quickly. This may be because we're writing a large program which takes a long time to run, or because we only have limited computing resources avaiable, or some other reason. In general, Python is a great tool for writing programs quickly, but they tend to execute relatively slowly. We thus use other lanugagues when high performance computing starts to become more important. Here we're going to look mainly at a lunage called Rust, but we'll also look briefly at C and C++ as widely used alternatives.

The contents of Part 0 of the notes are:1

.. toctree::
   :maxdepth: 2
   :numbered:
   :includehidden:

   0. Introduction <self>
   chapters/course_administration
   chapters/course_policies
   chapters/useful_information
   chapters/instructor
