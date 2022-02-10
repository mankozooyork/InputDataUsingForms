({
    clickCreateItem : function(component, event, helper) {
        let validExpense = component.find('campingItem').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validExpense) {
            let newCampingItem = component.get("v.newItem");
            console.log("Before Create camping item: " + JSON.stringify(newCampingItem));
            let campingItem = component.get("v.items");
            console.log("campingItem:" + JSON.stringify(campingItem))
            campingItem.push(newCampingItem);
            console.log("After Create camping item: " + JSON.stringify(campingItem));
            // set to items array
            component.set("v.items", campingItem);
            // initialize
            component.set("v.newItem", {"sobjectType": 'Camping_Item__c',
                          "Name": '', "Quantity__c": 0, "Price__c": 0, "Packed__c": false});
        }
    },
})