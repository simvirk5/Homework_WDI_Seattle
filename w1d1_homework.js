// Section 1
//1. Concatentation is used to add strings together in a new variablem, as shown in the third var.
//	Ex. var lastName = "Virk"
//		var firstName = "Simmy"
//		var fullName = lastName + firstName

//	Interpolation is adding something in between variables.
//	Ex. var weather = "sunny"
//		var day = "today"
//		var total = day + "is a very" + weather + "day"

// 2. DRY means Don't Repeat Yourself 
// Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Kevin' == 'Kevin');
console.log(a + b == c);
console.log(a + a == d);
console.log(e == 'Kevin');
console.log(48!=='48');
//Section 3
//It is an infinite loop because there is no variable set for what is true. 
//There is also no i (initiation). 
//The second loop is not infinite because the constant is set at true, but
//the result is false
//I thought the 'A' would run 21 times because i < 20 and there is i++, instead
//it ran 20 times.

//Section 4
//A while loops repeats the code over when condition for a variable is true or false. 
//A for look is a condition set to each item in an array
for (var i=0; i<999; i+=1) {
	console.log ("It's my Birthday");
	}
//components of control panel :
//First one is initial expression - where is variable begins
//Second one is condition - how far the expression will go for, to make sure loop doesn't run forever
//Third is final expression - the increment to which the variable will increase 
 for (var i=999; i>=0; i--){
	console.log(i);
}

for (var i=0; i<=10; i+=1) {
	console.log(`The value of i is: ` + ` ${i} of 10`);

}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
	for (var i=0; i<StarWars.length; i++) {
		console.log(StarWars[i] +  `${i}`);
	}

//Section 5
*/➜  homework cd ..                
➜  desktop mkdir "galaxy_far_far_away"
➜  desktop cd galaxy_far_far_away
➜  galaxy_far_far_away mkdir "death_star"
➜  galaxy_far_far_away cd death_star 
➜  death_star touch "darth_vader.txt"
➜  death_star touch "princess_leia.txt"
➜  death_star touch "storm_trooper.txt"
➜  death_star cd ..
➜  galaxy_far_far_away mkdir tatooine
➜  galaxy_far_far_away cd tatooine
➜  tatooine touch "luke.txt"
➜  tatooine touch "ben_kenobi.txt"
➜  tatooine mkdir "millenium_falcon"
➜  tatooine cd millenium_falcon 
➜  millenium_falcon touch "han_solo.txt"
➜  millenium_falcon touch "chewbaca.txt"
➜  millenium_falcon cd ..
➜  tatooine mv "ben_kenobi.txt" to "obi_wan.txt" 
usage: mv [-f | -i | -n] [-v] source target
       mv [-f | -i | -n] [-v] source ... directory
➜  tatooine "ben_kenobi.txt" "obi_wan.txt" 
zsh: command not found: ben_kenobi.txt
➜  tatooine  
➜  tatooine "ben_kenobi.txt" "obi.wan.txt"
zsh: command not found: ben_kenobi.txt
➜  tatooine mv "ben_kenobi.txt" "obi_wan.txt"
➜  tatooine cd ..
➜  galaxy_far_far_away cd death_star 
➜  death_star cp "storm_trooper.txt" ../ tatooine
usage: cp [-R [-H | -L | -P]] [-fi | -n] [-apvXc] source_file target_file
       cp [-R [-H | -L | -P]] [-fi | -n] [-apvXc] source_file ... target_directory
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd tatooine
➜  tatooine ls
luke.txt         millenium_falcon obi_wan.txt
➜  tatooine ls
luke.txt         millenium_falcon obi_wan.txt
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star cp "storm_trooper.txt" ../tatooine
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd tatooine
➜  tatooine ls
luke.txt          millenium_falcon  obi_wan.txt       storm_trooper.txt
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd tatooine
➜  tatooine ls
luke.txt          millenium_falcon  obi_wan.txt       storm_trooper.txt
➜  tatooine ls            
luke.txt          millenium_falcon  obi_wan.txt       storm_trooper.txt
➜  tatooine cd millenium_falcon 
➜  millenium_falcon mv luke.txt ..
mv: luke.txt: No such file or directory
➜  millenium_falcon cd ..
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd tatooine 
➜  tatooine ls
luke.txt          millenium_falcon  obi_wan.txt       storm_trooper.txt
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd tatooine 
➜  tatooine mv luke.txt millenium_falcon 
➜  tatooine ls
millenium_falcon  obi_wan.txt       storm_trooper.txt
➜  tatooine mv obi_wan.txt millenium_falcon 
➜  tatooine ls
millenium_falcon  storm_trooper.txt
➜  tatooine mv millenium_falcon ..
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away ls 
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd millenium_falcon 
➜  millenium_falcon cd ..
➜  galaxy_far_far_away cd death_star 
➜  death_star cd ..  
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd millenium_falcon 
➜  millenium_falcon cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd tatooine 
➜  tatooine ls
storm_trooper.txt
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star mv millenium_falcon ..
mv: millenium_falcon: No such file or directory
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd millenium_falcon 
➜  millenium_falcon mv millenium_falcom ..
mv: rename millenium_falcom to ../millenium_falcom: No such file or directory
➜  millenium_falcon no
zsh: command not found: no
➜  millenium_falcon cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd millenium_falcon 
➜  millenium_falcon ls
chewbaca.txt han_solo.txt luke.txt     obi_wan.txt
➜  millenium_falcon cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..                                                                 
➜  galaxy_far_far_away cd ..
➜  desktop mv galaxy_far_far_away/millenium_falcon galaxy_far_far_away/death_star
➜  desktop ls
galaxy_far_far_away homework
➜  desktop cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   millenium_falcon  princess_leia.txt storm_trooper.txt
➜  death_star mv princess_leia.txt ../millenium_falcon
➜  death_star ls
darth_vader.txt   millenium_falcon  storm_trooper.txt
➜  death_star cd millenium_falcon 
➜  millenium_falcon ls
chewbaca.txt han_solo.txt luke.txt     obi_wan.txt
➜  millenium_falcon ls
chewbaca.txt han_solo.txt luke.txt     obi_wan.txt
➜  millenium_falcon cd ..
➜  death_star ls
darth_vader.txt   millenium_falcon  storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   millenium_falcon  storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away mv millenium_falcon princess_leia.txt
➜  galaxy_far_far_away ls
death_star        princess_leia.txt tatooine
➜  galaxy_far_far_away mv princess_leia.txt death_star/
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   millenium_falcon  princess_leia.txt storm_trooper.txt
➜  death_star mv princess_leia.txt millenium_falcon/
➜  death_star ls
darth_vader.txt   millenium_falcon  storm_trooper.txt
➜  death_star cd millenium_falcon 
➜  millenium_falcon ls
chewbaca.txt      han_solo.txt      luke.txt          obi_wan.txt       princess_leia.txt
➜  millenium_falcon cd ..
➜  death_star ls
darth_vader.txt   millenium_falcon  storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd tatooine 
➜  tatooine ls
storm_trooper.txt
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   millenium_falcon  storm_trooper.txt
➜  death_star cd millenium_falcon 
➜  millenium_falcon ls
chewbaca.txt      han_solo.txt      luke.txt          obi_wan.txt       princess_leia.txt
➜  millenium_falcon rm obi_wan.txt 
➜  millenium_falcon ls
chewbaca.txt      han_solo.txt      luke.txt          princess_leia.txt
➜  millenium_falcon cd ..
➜  death_star cd ..
➜  galaxy_far_far_away mkdir "yavin_4"
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away las
zsh: command not found: las
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
darth_vader.txt   millenium_falcon  storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd death_star 
➜  death_star mv millenium_falcon/ ..
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine         yavin_4
➜  galaxy_far_far_away cd ..
➜  desktop mv galaxy_far_far_away/millenium_falcon/ galaxy_far_far_away/yavin_4/
➜  desktop ls
galaxy_far_far_away homework
➜  desktop cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd yavin_4 
➜  yavin_4 ls
millenium_falcon
➜  yavin_4 mkdir "x-wing"
➜  yavin_4 ls
millenium_falcon x-wing
➜  yavin_4 ls
millenium_falcon x-wing
➜  yavin_4 cd millenium_falcon 
➜  millenium_falcon mv princess_leia.txt ..
➜  millenium_falcon cd ..
➜  yavin_4 ls
millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 cd mil
cd: no such file or directory: mil
➜  yavin_4 cd millenium_falcon 
➜  millenium_falcon ls
chewbaca.txt han_solo.txt luke.txt
➜  millenium_falcon mv luke.txt ..
➜  millenium_falcon cd ..
➜  yavin_4 ls
luke.txt          millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 cd ..
➜  galaxy_far_far_away ls          
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd yavin_4 
➜  yavin_4 ls
luke.txt          millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 mv luke.txt x-wing/
➜  yavin_4 ls
millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 cd x-wing 
➜  x-wing ls
luke.txt
➜  x-wing cd ..
➜  yavin_4 ls
millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 mv millenium_falcon/ ..
➜  yavin_4 mv x-wing/ ..
➜  yavin_4 cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine         x-wing           yavin_4
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine         x-wing           yavin_4
➜  galaxy_far_far_away cd death_star 
➜  death_star mkdir "tie_fighter_1"
➜  death_star mkdir "tie_fighter_2"
➜  death_star mkdir "tie_fighter_3"
➜  death_star ls
darth_vader.txt   storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star mv darth_vader.txt tie_fighter_1/
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cd tie_fighter_1
➜  tie_fighter_1 ls
darth_vader.txt
➜  tie_fighter_1 cd ..
'%                                                                                                                  ➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine         x-wing           yavin_4
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cp storm_trooper.txt ../tie_fighter_2
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cd tie_fighter_1
➜  tie_fighter_1 ls
darth_vader.txt
➜  tie_fighter_1 cd ./.
➜  tie_fighter_1 cd ..
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cd tie_fighter_2
➜  tie_fighter_2 ls
➜  tie_fighter_2 ls
➜  tie_fighter_2 cd ..
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cd storm_trooper.txt tie_fighter_2/
cd: string not in pwd: storm_trooper.txt
➜  death_star ls 
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cd tie_fighter_2
➜  tie_fighter_2 ls
➜  tie_fighter_2 cd ..
➜  death_star cp storm_trooper.txt tie_fighter_2/
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cd tie_fighter_2
➜  tie_fighter_2 ls
storm_trooper.txt
➜  tie_fighter_2 cd ..
➜  death_star cp storm_trooper.txt tie_fighter_3/
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star mv tie_fighter_1 ..
➜  death_star ls
storm_trooper.txt tie_fighter_2     tie_fighter_3
➜  death_star mv tie_fighter_2 ..
mv: rename tie_fighter_2 to ../tie_fighter_2: Not a directory
➜  death_star mv tie_fighter_3
usage: mv [-f | -i | -n] [-v] source target
       mv [-f | -i | -n] [-v] source ... directory
➜  death_star mv 
➜  death_star mv tie_fighter_3 ..
➜  death_star ls
storm_trooper.txt tie_fighter_2
➜  death_star mv tie_fighter_2 ..
mv: rename tie_fighter_2 to ../tie_fighter_2: Not a directory
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star       tatooine         tie_fighter_2    x-wing
millenium_falcon tie_fighter_1    tie_fighter_3    yavin_4
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
storm_trooper.txt tie_fighter_2
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star       tatooine         tie_fighter_2    x-wing
millenium_falcon tie_fighter_1    tie_fighter_3    yavin_4
➜  galaxy_far_far_away rm tie_fighter_2
➜  galaxy_far_far_away ls
death_star       tatooine         tie_fighter_3    yavin_4
millenium_falcon tie_fighter_1    x-wing
➜  galaxy_far_far_away cd death_star 
➜  death_star ls
storm_trooper.txt tie_fighter_2
➜  death_star mv tie_fighter_2 ..
➜  death_star ls
storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star       tatooine         tie_fighter_2    x-wing
millenium_falcon tie_fighter_1    tie_fighter_3    yavin_4
➜  galaxy_far_far_away rm -r tie_fighter_2
➜  galaxy_far_far_away rm -r tie_fighter_3
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine         tie_fighter_1    x-wing           yavin_4
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine         tie_fighter_1    x-wing           yavin_4
➜  galaxy_far_far_away cd x-wing 
➜  x-wing touch "the_force.txt"
➜  x-wing cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine         tie_fighter_1    x-wing           yavin_4
➜  galaxy_far_far_away rm -r death_star 
➜  galaxy_far_far_away ls
millenium_falcon tatooine         tie_fighter_1    x-wing           yavin_4
➜  galaxy_far_far_away cd ..
➜  desktop mv galaxy_far_far_away/x-wing galaxy_far_far_away/yavin_4 
➜  desktop ls
galaxy_far_far_away homework
➜  desktop ls
galaxy_far_far_away homework
➜  desktop cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
millenium_falcon tatooine         tie_fighter_1    yavin_4
➜  galaxy_far_far_away cd yavin_4 
➜  yavin_4 ls
princess_leia.txt x-wing
➜  yavin_4 cd ..
➜  galaxy_far_far_away cd ..
➜  desktop mv galaxy_far_far_away/millenium_falcon galaxy_far_far_away/yavin_4 
➜  desktop ls
galaxy_far_far_away homework
➜  desktop cd galaxy_far_far_away 
➜  galaxy_far_far_away ls
tatooine      tie_fighter_1 yavin_4
➜  galaxy_far_far_away cd yavin_4 
➜  yavin_4 ls
millenium_falcon  princess_leia.txt x-wing
➜  yavin_4 
/*
// Section 6
//1. Making mistakes helps to concentrate and focus on what the problem is and how to get to the solution. 
//1. @username and @channel to send messages to individuals and to seattle group as appropriate. 
//2. I leaned that slack shows contact details for people in my network. 




