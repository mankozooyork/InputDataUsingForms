({
    clickCreateItem : function(component, event, helper) {
        let validExpense = component.find('campingItem').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validExpense) {
            let newCampingItem = component.get("v.newItem");
            console.log("Create camping item: " + JSON.stringify(newCampingItem));
            let campingItem = component.get("v.items");
            let item = JSON.parse(JSON.stringify(campingItem));
            campingItem.push(item);
            component.set("v.items", item);
            component.set("v.newItem", {"sobjectType": 'Camping_Item__c',
                          "Name": '', "Quantity__c": 0, "Price__c": 0, "Packed__c": false});
        }
    },
})