let english = {
  colorGreen: "green",
  colorPurple: "purple",
  colorBlue: "blue",
  colorBrown: "brown",
  about: `about`,
  about1: `     2048 is a single-player sliding tile puzzle video game written
                by Italian web developer Gabriele Cirulli and published on
                GitHub. The objective of the game is to slide numbered tiles on
                a grid to combine them to create a tile with the number 2048;
                however, one can continue to play the game after reaching the
                goal, creating tiles with larger numbers. It was originally
                written in JavaScript and CSS over a weekend, and released on 9
                March 2014 as free and open-source software subject to the MIT
                License. Versions for iOS and Android followed in May 2014.`,
  about2: `   2048 was intended to be an improved version of two other games,
                both of which were clones of the iOS game Threes released a
                month earlier. Cirulli himself described 2048 as being
                "conceptually similar" to Threes.[2] The release of 2048
                resulted in the rapid appearance of many similar games, akin to
                the flood of Flappy Bird variations from 2013. The game received
                generally positive reviews from critics, with it being described
                as "viral" and "addictive".`,
  gameplay: `gameplay`,
  about3: `          2048 is played on a plain 4×4 grid, with numbered tiles that
                slide when a player moves them using the four arrow keys.[3]
                Every turn, a new tile randomly appears in an empty spot on the
                board with a value of either 2 or 4.[4] Tiles slide as far as
                possible in the chosen direction until they are stopped by
                either another tile or the edge of the grid. If two tiles of the
                same number collide while moving, they will merge into a tile
                with the total value of the two tiles that collided.[5][6] The
                resulting tile cannot merge with another tile again in the same
                move. Higher-scoring tiles emit a soft glow;[4] the highest
                possible tile is 131,072.[7]`,
  about4: `      If a move causes three consecutive tiles of the same value to
                slide together, only the two tiles farthest along the direction
                of motion will combine. If all four spaces in a row or column
                are filled with tiles of the same value, a move parallel to that
                row/column will combine the first two and last two.[8] A
                scoreboard on the upper-right keeps track of the user's score.
                The user's score starts at zero, and is increased whenever two
                tiles combine, by the value of the new tile.[4] The game is won
                when a tile with a value of 2048 appears on the board. Players
                can continue beyond that to reach higher scores.[9][10][11] When
                the player has no legal moves (there are no empty spaces and no
                adjacent tiles with the same value), the game ends.[2][12]`,
  development: `Development`,
  about5: `                Nineteen-year-old Gabriele Cirulli created the game in a single
                weekend as a test to see if he could program a game from
                scratch.[15] "It was a way to pass the time", he said.[16] He
                described it as being "conceptually similar" to the recently
                released iOS game Threes,[2][17] and a clone of another game,
                1024.[18] Developed by Veewo Studio,[19] 1024 is itself a clone
                of Threes, with its App Store description once reading "no need
                to pay for Threes".[20] Cirulli's README for 2048 cites another
                1024 clone as influence: the homonymous but slightly different
                in terms of mechanics 2048 by Saming.[21] Cirulli was surprised
                when his weekend project received over 4 million visitors in
                less than a week.[3][22] The game is free to play, Cirulli
                having said that he was unwilling to make money "from a concept
                that [he] didn't invent".[23] He released ports for iOS and
                Android in May 2014.[24]`,
  howtoplay: `How To Play`,
  howtoplay1: `  Combine tiles of the same number in an attempt to create a tile
                with the value 2048.`,
  howtoplay2: `     Pressing the arrow keys or swiping across the game board will
                move all tiles in the direction of the key pressed/swipe. After
                all the tiles are done moving a new tile with the value of 2 or
                4 will be created in a random empty cell.`,
  howtoplay3: `      Two tiles with the same number will merge when they collide to
                create a single tile with double the value.`,
  howtoplay4: `  The game is over when there are no valid ways for you to move
                the tiles.`,
  newGame: `New Game`,
  score: `score`,
  gameover: `Game Over`,
  youwin: `You Win`,
};

export default english;
