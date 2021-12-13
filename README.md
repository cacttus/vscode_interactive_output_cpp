# VSCode extension for Interactive Output using C/C++ extension

Enables file navigation in the C/C++ Output window for CMake Tools.

## How to Run

* Run npm install in the project folder.

* Open project folder in VSCode

* In debug panel click the > arrow "Run Extension"

* You can find the extension's output 'C/C++ Interactive Output Errors' in the output dropdown.

## My Take on VSCode Extensions

I'm kind of surprised at how inflexible the VScode extension API is, given that Code basically runs on extensions. There seems to be just two webpages to find valuable information, besides the internet. I wanted to alter the output stream directly so that we can have syntax highlighting. I couldn't figure it out (if it is possible). One Github comment said that it isn't possible (yet). I'd also like to jump to a file on a double click, instead of a selection changed event. It appears that many of developers are in the same position from what I've read on github and stack overflow. They had to hack it. I considered actually modifying the C/C++ extension (or VSCode itself) but it ended up being too much work. This quick extension work for now. I hope it helps someone else. Hoping someone out there with some free time can figure out how to highlight output window syntax.

## TODO

* URIs containing + aren't interpreted correctly because of the web '%' escape characters replacing them.

* Highlighting of 'error' in the window.

