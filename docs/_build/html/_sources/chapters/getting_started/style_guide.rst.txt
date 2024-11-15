Code style guide
----------------
In general, there are many ways in which you can format or layout your code, all of which will work. That said, how you layout your code can have a big impact on how easy it is to read and to debug.

Most  companies will have an internal style guide for how to structure and format code so that it looks consistent between different developers and is easy for different people to work on the same codebase. In large projects there may be many different people coding different parts of the program. 

There are also automatic tools that you can use to check your code style against a standard, and to automatically convert code between different styles. 

We don't have a strictly enforced style guide,e do recommend picking your style and then sticking with it - it will help make your code more consistent, more readable, and easier to debug.
 
For writing these notes, we will use conventions common in Python and in Rust. In particular:

- Filenames will be in snake case. That is, all lower case with underscores _ rather than spaces. Example: file_name.py. This is to help avoid cases like "file name.py" being accidently interpreted as two files, one called "file" and one called "name.c". (Nevertheless, our code should use delimiters to make the start and end of a filename to avoid this issue, because in general you can't guarantee what a filename will be.)

- Variables will be in snake case. Example: my_variable_name. Usually, but not always, programming is case sensitive, and so sticking with this helps ensure we don't have My_variable and my_variable, which are actually two different variables.

- Constants will be in capitals. Example: MY_CONSTANT.

- We won't use camel case. (Example: MyVariableName.)

- Code will be indented each time we move into a function, or into an if or while statement, or similar.

- An indent is 4 spaces, entered with the space bar. We won't use tabs for indenting. This is because different computers display tabs as having different widths, whereas a space is more fixed.

- Comments on the same line as code start with a lower case letter, as if they were continuing on a sentence. Comments on a line by-themselves start with an upper case letter, as if they are starting a new sentence.


