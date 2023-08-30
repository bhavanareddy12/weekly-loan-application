export const columns = [
'S.No','Names Name','Action'
]

export const list = [
{
    id:1,
    day:"monday",
    time:"morning",
    name:"Bikkavolu"
},
{
    id:2,
    day:"monday",
    time:"morning",
    name:"Rajamahendravaram"
},
{
    id:3,
    day:"monday",
    time:"evening",
    name:"Y.Ramavaram"
},
{
    id:4,
    day:"monday",
    time:"evening",
    name:"Gokavaram"
},
{
    id:5,
    day:"tuesday",
    time:"morning",
    name:"Seethanagaram"
},
{
    id:6,
    day:"tuesday",
    time:"morning",
    name:"Balabhadhrapuram"
},
{
    id:7,
    day:"tuesday",
    time:"evening",
    name:"Rayavaram"
},
{
    id:8,
    day:"tuesday",
    time:"evening",
    name:"Gangavaram"
},
{
    id:9,
    day:"wednesday",
    time:"morning",
    name:"Kottapalli"
},
{
    id:10,
    day:"wednesday",
    time:"morning",
    name:"Kadiam"
},
{
    id:11,
    day:"wednesday",
    time:"evening",
    name:"Jaggampeta"
},
{
    id:12,
    day:"wednesday",
    time:"evening",
    name:"Kovvur"
},
{
    id:13,
    day:"thursday",
    time:"morning",
    name:"Rajanagaram"
},
{
    id:14,
    day:"thursday",
    time:"morning",
    name:"Amalapuram"
},
{
    id:15,
    day:"thursday",
    time:"evening",
    name:"Ramachandrapuram"
},
{
    id:16,
    day:"thursday",
    time:"evening",
    name:"Mandapeta"
},
{
    id:17,
    day:"friday",
    time:"morning",
    name:"Peddapuram"
},
{
    id:18,
    day:"friday",
    time:"morning",
    name:"Atreyapuram"
},
{
    id:19,
    day:"friday",
    time:"evening",
    name:"Maredumilli"
},
{
    id:20,
    day:"friday",
    time:"evening",
    name:"Rampachodavaram"
},
{
    id:21,
    day:"saturday",
    time:"morning",
    name:"Allavaram"
},
{
    id:22,
    day:"saturday",
    time:"morning",
    name:"Tallarevu"
},{
    id:23,
    day:"saturday",
    time:"evening",
    name:"Tuni"
},
{
    id:24,
    day:"saturday",
    time:"evening",
    name:"Pithapuram"
},
{
    id:25,
    day:"sunday",
    time:"morning",
    name:"Samarlakota"
},
{
    id:26,
    day:"sunday",
    time:"morning",
    name:"Ravulapalem"
},{
    id:27,
    day:"sunday",
    time:"evening",
    name:"Sakhinetipalle"
},
{
    id:28,
    day:"sunday",
    time:"evening",
    name:"Eleswaram"
}
]

export const getVillageslist =(day,time) =>{
   return list.filter(village=> (village.day === day && village.time === time))
}