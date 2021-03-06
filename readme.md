## Tower of Hanoi
The Tower of Hanoi is a puzzle.

It consists of three rods and a number of disks of different sizes, which can slide onto any rod. The puzzle starts with all the disks stacked on one rod, largest at the bottom, smallest at the top.

The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

Only one disk can be moved at a time.
Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.
No disk may be placed on top of a smaller disk.

## Student Team
Joseph Dubon (josephdubon@pm.me)

## GitHub Pages URL
https://josephdubon.github.io/tower-of-hanoi/

### Assessment Development Plan
    1. Provide a way to select a disc from the top of a tower
        a. Click handler on each tower
         -- tower.addEventListener("click", ___)
        b. "Pick up" the topmost disc on the tower
            tower.lastElementChild()
    2. Provide a way to "drop" the disc on top of another tower, if the rules allow
        a. Click handler (same as top)
        b. See if the disc to drop is smaller than the topmost disc on the tower
                The topmost disc is the last element child
                    tower.lastElementChild()
            ?? How do we compare the widths of the two discs ??
                disc1.dataset.width < disc3.dataset.width
        c. If so, add the disc to the tower
            tower.appendChild(disc)
    3. Check to see if the game is over --"winning condition"
        a. If all four discs are in the third tower, the game is over
            function youWon(iceDrillClick)
    if (tower3.childElementCount === 4) {
        console.log("You won!!")

### Notes
If you'd like to learn more about the game, you can read its Wikipedia article
https://en.wikipedia.org/wiki/Tower_of_Hanoi

Make each tower a flex box that stacks elements from bottom to top using the following CSS properties:
{
    display: flex;  
    flex-direction: column-reverse;  
    align-items: center;
}

You will want to have the player click twice for each move - first to pick the source tower, second to pick the destination tower. Use a variable to keep track of which mode the player is in.

Add a click handler to each of the three towers. Use event.currentTarget inside the event handler to determine which tower was clicked.

Use the DOM property childElementCount to find how many disks are in a tower.

Use the DOM property lastElementChild to find the disk on top of a tower.

Use the DOM method appendChild() to add a disk to a tower (you have already used this method many times in previous assignments). Note that when you use appendChild on an element that already has a parent, it is automatically removed from the old parent and added to the new one.

Use the Element.clientWidth property to get the width of your disk elements.

#### License
MIT License

Copyright (c) [2020] [Joseph Adonay Dubon]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
