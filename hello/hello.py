
def addOne(arr):
    carry = 1
    result = [len(arr)]
    for i in range (n-1,-1,-1):
        sum = arr[i] + carry
        if sum == 10:
            carry = 1
        else: 
            carry = 0 
            result[i] = sum % 10 
     if carry == 1:
         result =        

    









if __name__ == '__Main__':
    test_cases = [
        [1,3,4],
        [9,9,9]
    ]
    for arr in test_cases: 
        addOne(arr)


