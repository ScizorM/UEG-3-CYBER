
execute @s ~ ~ ~ tp @s ~ ~ ~

 
camera @s fade time 0 0 0.5 color 0 150 100

 
effect @s slowness 2 2 true

xp -100L @s


execute @s ~ ~ ~ function add_stun
 
execute @s ~ ~ ~ particle sm:stun_bolt ~ ~1 ~

 
scoreboard players set @s dashes 0


 
playsound emp @s
 
playsound emp_stun @s
playsound emp_stun_global @a