/**
 * @description Test class for AccountHelper
 * @author Agentforce
 * @date 2026-05-20
 */
@isTest
private class AccountHelperTest {
    
    /**
     * @description Setup test data for all test methods
     */
    @TestSetup
    static void setupTestData() {
        // Create test accounts
        List<Account> accounts = new List<Account>();
        for (Integer i = 0; i < 251; i++) {
            accounts.add(new Account(
                Name = 'Test Account ' + i,
                Phone = '555-000-' + String.valueOf(i).leftPad(4, '0')
            ));
        }
        insert accounts;
    }
    
    /**
     * @description Test that getAccountList returns account when valid Id is provided
     */
    @isTest
    static void shouldReturnAccount_WhenValidIdProvided() {
        // Given
        Account testAccount = [SELECT Id FROM Account LIMIT 1];
        
        // When
        Test.startTest();
        List<Account> result = AccountHelper.getAccountList(testAccount.Id);
        Test.stopTest();
        
        // Then
        Assert.areEqual(1, result.size(), 'Should return exactly one account');
        Assert.isNotNull(result[0].Name, 'Account Name should be populated');
        Assert.isNotNull(result[0].Phone, 'Account Phone should be populated');
        Assert.areEqual(testAccount.Id, result[0].Id, 'Should return the correct account');
    }
    
    /**
     * @description Test that getAccountList returns correct account fields
     */
    @isTest
    static void shouldReturnCorrectFields_WhenAccountQueried() {
        // Given
        Account testAccount = [SELECT Id, Name, Phone FROM Account WHERE Name = 'Test Account 0' LIMIT 1];
        
        // When
        Test.startTest();
        List<Account> result = AccountHelper.getAccountList(testAccount.Id);
        Test.stopTest();
        
        // Then
        Assert.areEqual(1, result.size(), 'Should return exactly one account');
        Assert.areEqual(testAccount.Name, result[0].Name, 'Should return correct account name');
        Assert.areEqual(testAccount.Phone, result[0].Phone, 'Should return correct account phone');
    }
    
    /**
     * @description Test that getAccountList returns empty list when no match found
     */
    @isTest
    static void shouldReturnEmptyList_WhenNoAccountMatches() {
        // Given
        // Create a valid 18-character Id that doesn't exist in the database
        Id nonExistentId = '001000000000000AAA';
        
        // When
        Test.startTest();
        List<Account> result = AccountHelper.getAccountList(nonExistentId);
        Test.stopTest();
        
        // Then
        Assert.areEqual(0, result.size(), 'Should return empty list when no account matches');
    }
    
    /**
     * @description Test that getAccountList throws exception when null Id provided
     */
    @isTest
    static void shouldThrowException_WhenNullIdProvided() {
        // Given
        Id nullId = null;
        
        // When/Then
        Test.startTest();
        try {
            AccountHelper.getAccountList(nullId);
            Assert.fail('Expected AuraHandledException to be thrown for null Id');
        } catch (AuraHandledException e) {
            Assert.isNotNull(e.getMessage(), 'Exception message should not be null');
        }
        Test.stopTest();
    }
    
    /**
     * @description Test bulk operation - verify method can handle multiple sequential calls
     */
    @isTest
    static void shouldHandleMultipleCalls_WhenCalledSequentially() {
        // Given
        List<Account> testAccounts = [SELECT Id FROM Account LIMIT 251];
        List<List<Account>> results = new List<List<Account>>();
        
        // When
        Test.startTest();
        for (Account acc : testAccounts) {
            results.add(AccountHelper.getAccountList(acc.Id));
        }
        Test.stopTest();
        
        // Then
        Assert.areEqual(251, results.size(), 'Should process all 251 accounts');
        for (List<Account> result : results) {
            Assert.areEqual(1, result.size(), 'Each call should return exactly one account');
            Assert.isNotNull(result[0].Name, 'Account Name should be populated');
            Assert.isNotNull(result[0].Phone, 'Account Phone should be populated');
        }
    }
    
    /**
     * @description Test cacheable behavior with consistent results
     */
    @isTest
    static void shouldReturnConsistentResults_WhenCalledMultipleTimes() {
        // Given
        Account testAccount = [SELECT Id FROM Account LIMIT 1];
        
        // When
        Test.startTest();
        List<Account> firstCall = AccountHelper.getAccountList(testAccount.Id);
        List<Account> secondCall = AccountHelper.getAccountList(testAccount.Id);
        Test.stopTest();
        
        // Then
        Assert.areEqual(firstCall.size(), secondCall.size(), 'Both calls should return same number of records');
        Assert.areEqual(firstCall[0].Id, secondCall[0].Id, 'Both calls should return same account Id');
        Assert.areEqual(firstCall[0].Name, secondCall[0].Name, 'Both calls should return same account name');
        Assert.areEqual(firstCall[0].Phone, secondCall[0].Phone, 'Both calls should return same account phone');
    }
}