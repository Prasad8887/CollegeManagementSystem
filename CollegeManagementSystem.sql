create database collegemanagementsystem_db;
use collegemanagementsystem_db;

create table student (  
  id    int auto_increment,  
  name    varchar(10),  
  dept_name      varchar(20),  
  address      varchar(20),
  admission_date date,  
  mobileno double,
  total_fees double,
   staff_id      int,
 
  
  constraint pk_student primary key (id),  
  constraint fk_staffno foreign key (staff_id) references staff (id)  
);

insert into student  
values(  
 101, 'Prasad', 'ComputerScience', 'Saswad',  
 str_to_date('17/06/2018','%d/%m/%Y'),  
 846512442, 40000, 11  
);

insert into student  
values(  
 102, 'Atul', 'ComputerEngg', 'velhe',  
 str_to_date('17/06/2018','%d/%m/%Y'),  
 8942144651, 40000, 12  
);

insert into student  
values(  
 103, 'harshada', 'ENTC', 'Pune',  
 str_to_date('17/06/2018','%d/%m/%Y'),  
 894651321, 40000, 13  
);

insert into student  
values(  
 104, 'ravina', 'mechanical', 'Saswad',  
 str_to_date('17/06/2018','%d/%m/%Y'),  
 8600546530, 40000, 14 
);

insert into student  
values(  
 105, 'deva', 'electrical', 'Saswad',  
 str_to_date('17/06/2018','%d/%m/%Y'),  
 8600546530, 40000, 15  
);

insert into student  
values(  
 106, 'tejal', 'ComputerScience', 'Saswad',  
 str_to_date('17/06/2018','%d/%m/%Y'),  
 877612164, 40000, 11  
);

insert into student  
values(  
 107, 'ketaki', 'ComputerScience', 'Saswad',  
 str_to_date('17/06/2018','%d/%m/%Y'),  
 987651321, 40000, 11  
);
insert into student  
values(  
 108, 'pratiksha', 'IT', 'Saswad',  
 str_to_date('17/06/2018','%d/%m/%Y'),  
 84316798, 40000, 16  
);

insert into student  
values(  
 109, 'Saumya', 'IT', 'Saswad',  
 str_to_date('17/06/2018','%d/%m/%Y'),  
 846512442, 40000, 13  
);

insert into student  
values(  
 110, 'sankita', 'ComputerEngg', 'velhe',  
 str_to_date('17/06/2017','%d/%m/%Y'),  
 8942144651, 40000, 15  
);

insert into student  
values(  
 111, 'mansi', 'ENTC', 'Pune',  
 str_to_date('17/06/2018','%d/%m/%Y'),  
 894651321, 40000, 12  
);

insert into student  
values(  
 112, 'ravi', 'mechanical', 'Saswad',  
 str_to_date('17/06/2018','%d/%m/%Y'),  
 8451215, 40000, 14 
);

insert into student  
values(  
 113, 'sanika', 'electrical', 'Saswad',  
 str_to_date('17/06/2018','%d/%m/%Y'),  
 8600546530, 40000, 14  
);

insert into student  
values(  
 114, 'sona', 'ComputerScience', 'Saswad',  
 str_to_date('17/06/2018','%d/%m/%Y'),  
 877612164, 40000, 16  
);



/*--------------------------------------------------------------------------*/
create table staff (  
  id    int auto_increment,  
  name    varchar(10),  
  dept_name      varchar(20),  
  address      varchar(20),
  joining_date date,  
  mobileno double,
  salary double,
   
  constraint pk_student primary key (id) 
   
);
insert into staff  
values(  
 11, 'sambodhi', 'ComputerScience', 'Saswad',  
 str_to_date('17/11/2018','%d/%m/%Y'),  
 84316798, 50000  
);

insert into staff  
values(  
 12, 'poonam', 'ComputerEngg', 'Saswad',  
 str_to_date('19/06/2012','%d/%m/%Y'),  
 84316798, 50000  
);

insert into staff  
values(  
 13, 'sonali', 'ENTC', 'Saswad',  
 str_to_date('08/06/2020','%d/%m/%Y'),  
 84316798, 50000 
);

insert into staff  
values(  
 14, 'harry', 'mecanical', 'Saswad',  
 str_to_date('14/03/2013','%d/%m/%Y'),  
 84316798, 50000  
);

insert into staff  
values(  
 15, 'nandini', 'electrical', 'Saswad',  
 str_to_date('11/06/2018','%d/%m/%Y'),  
 84316798, 50000  
);

insert into staff  
values(  
 16, 'shri', 'IT', 'Saswad',  
 str_to_date('02/02/2012','%d/%m/%Y'),  
 84316798, 50000  
);

select * from student;
select * from staff;