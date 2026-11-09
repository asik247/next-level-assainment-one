function multiplyValue (value :number,multiplier?:number):number{

    if(multiplier === undefined ){
        return value * 2;
    }
    return value * multiplier;
    
}


function processInput (value:string | number | boolean):string | number{
    if(typeof value ==='string'){
        return value.toLowerCase().trim()
    }else if(typeof value ==='number'){
        return value * 10
    }else{
        return value ? "Active" : "Inactive";
    }
    
}


type Coordinate = readonly [number,number,string];

function formatCoordinate(coordinate:Coordinate):string{
    
    const [latitude,longitude,locationName] = coordinate;
     
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}


function concatenateArrays <T>(...arrays:T[][]):T[]{
  
   const result:T[] = [];

   for(const singleArray of arrays){
    result.push(...singleArray);
   }
   return result;
    
}


interface Course{
    title:string,
    students:number,
    isPublished:boolean,
}

function getPopularCourses(courses:Course[],minStudents:number):Course[]{
    
    return courses.filter((single:Course):boolean=>single.isPublished && single.students>=minStudents);
    
}


function pluckValues<T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] {

   return items.map((item:T):T[K] =>item[key]);
}

class Employee{
    protected name:string;
    private baseSalary:number;

    constructor(name:string, baseSalary:number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}
class Manager extends Employee{
    private department:string;

    constructor(name:string,baseSalary:number, department:string){
        super(name,baseSalary);
        this.department = department;
    }
    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`
    }
}


async function validateAgeAsync(age: number): Promise<string>{
    return new Promise<string>((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }

    });
}




