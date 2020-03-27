import { ArrayService} from "./app-service.interface";
import { ArrayComponent } from "./app.component";

class MockArrayService implements ArrayService {
    
    public arrayMultiply(myArray : any) : Array<Number> {
        let temp = [], j=0;
        for(var i=0;i<myArray.length;i++){
            if(myArray[i]%5===0 || myArray[i]%10 ===0){
                temp[j] = myArray[i];
                j++;
            }              
        }
        return temp
    }

    public arraySeparate(myArray: any) : Array<string>{
        let str = [], j=0;
        for(var i=0;i<myArray.length;i++){
            if(typeof(myArray[i]) === "string"){
                str[j] = myArray[i];
                j++;
            }              
        }
        return str;
    }

    public arraySplit(str:string) : Array<number>{
        const temp = str.split(",");
        const primeArray = [];
        let k=0;
        for(var i=0;i<temp.length;i++){
            let y = +temp[i];
            for(var j=2;j<y;j++){
                if(y%j===0)
                    continue;
                else{
                    primeArray[k] = y;
                    k++; }
            }
        }
        return primeArray;
    }

    public arraySort(myArray:any):Array<string>{
        myArray.sort();
        myArray.reverse();
        return myArray;
    }

    public arrayReplace(myArray:any):Array<number>{
        for(var i=0;i<myArray.length;i++){
            if(myArray[i]%3===0)
                myArray[i] = 5;
        }
        return myArray;
    }
}

describe("numbers divisible by 5 and 10", () => {
    it("should return the array contains number divisible by 5 and 10", () => {
        let mockArrayService = new MockArrayService();
        let arrayComponent = new ArrayComponent(mockArrayService);
        let myArray = [34, 45, 60, 23, 13, 25, 70];
        expect(arrayComponent.arrayMultiply(myArray)).toEqual([45,60,25,70]);
    });
});

describe("Separate the array", ()=>{
    it("should separate the values of string from the given array",()=>{
        let mockArrayService = new MockArrayService();
        let arrayComponent = new ArrayComponent(mockArrayService);
        let myArray = [34, "John", 60, "23", 13, true, 70, "George"];
        expect(arrayComponent.arraySeparate(myArray)).toEqual(["John", "23", "George"]);
    });
});

describe("Split array",()=>{
    it("split the given string as array and print prime numbers alone in the format of array",()=>{
        let mockArrayService = new MockArrayService();
        let arrayComponent = new ArrayComponent(mockArrayService);
        let myString = "34,45,60,23,13,25,70";
        expect(arrayComponent.arraySplit(myString)).toEqual([23,13]);
    });
});

describe("Sort the array", ()=>{
    it("sort the given array in descending order",()=>{
        let mockArrayService = new MockArrayService();
        let arrayComponent = new ArrayComponent(mockArrayService);
        let myArray = ["Zaheer","Amin","Steffe","Bobby"];
        expect(arrayComponent.arraySort(myArray)).toEqual(["Zaheer","Steffe","Bobby","Amin"]);
    });
});

describe("Replace the elements",()=>{
    it("Replace the 3 divisible number by 5 in the given array",()=>{
        let mockArrayService = new MockArrayService();
        let arrayComponent = new ArrayComponent(mockArrayService);
        let myArray = [2,15,3,6,4,86,93];
        expect(arrayComponent.arrayReplace(myArray)).toEqual([2,15,5,5,86,5]);
    })
})


