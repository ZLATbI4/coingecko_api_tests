import {expect} from "chai";

export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
}

export class ArraySortingChecks {
    constructor(private array: number[]) {
    }

    async checkNumArraySorted(sortOrder: SortOrder){
        let isSorted: boolean = true
        let currentElement: number = 0
        let nextElement: number = 0
        let index: number = 0

        for (index; index < this.array.length - 1; index++) {
            currentElement = this.array[index]
            nextElement = this.array[index + 1]

            switch (sortOrder) {
               case SortOrder.ASC: {
                   if (currentElement > nextElement) {
                       isSorted = false
                       break
                   }
                   break
               }
               case SortOrder.DESC: {
                   if (currentElement < nextElement) {
                       isSorted = false
                       break
                   }
                   break
               }
           }
        }
        expect(isSorted).to.be.equal(
            true,
            `Array isn't sorted ${sortOrder}!\nIndex ${index} value ${currentElement}, next value ${nextElement}`)
    }
}