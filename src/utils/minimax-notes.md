**minimax should return the best move to be made by O**

how will it do that?

cycle through all empty spaces, mark an O, do something, then remove the O

keep track of all of these moves, and return the one with the best score

**what should it do after marking the O?**

create a move object with the row and col of the marked O

check the state of the board:\
if it is a win for O, give this move a score of 1\
if it is a loss for O, give it a score of -1\

if it is neither, run the function again, but this time, minimize\
give this move the score returned by the function

**what should it do after making all moves**

if the function is maximizing, return the move with the highest score, otherwise return the move with the lowest score
