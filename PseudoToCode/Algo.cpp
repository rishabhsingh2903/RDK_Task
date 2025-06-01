#include <iostream>
using namespace std;


void sortArray(int a[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (a[j] < a[i]) {
                int temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
}

float findMedian(int a[], int n) {
    float median = 0;
    if (n % 2 == 0) {
        median = (a[(n / 2) - 1] + a[n / 2]) / 2.0; 
    } else {
        median = a[n / 2];
    }
    return median;
}

int main() {
    // Test Case 1
    int arr1[] = {7, 3, 1, 5, 9};
    int n1 = 5;

    sortArray(arr1, n1);
    cout << "Sorted Array 1: ";
    for (int i = 0; i < n1; i++) {
        cout << arr1[i] << " ";
    }
    // cout << endl;
    cout << "Median of Array 1: " << findMedian(arr1, n1) << endl << endl;

    // Test Case 2
    int arr2[] = {12, 4, 8, 6};
    int n2 = 4;

    sortArray(arr2, n2);
    cout << "Sorted Array 2: ";
    for (int i = 0; i < n2; i++) {
        cout << arr2[i] << " ";
    }
    cout << endl;
    cout << "Median of Array 2: " << findMedian(arr2, n2) << endl << endl;

    // Test Case 3
    int arr3[] = {15, 22, 3, 18, 11, 6};
    int n3 = 6;

    sortArray(arr3, n3);
    cout << "Sorted Array 3: ";
    for (int i = 0; i < n3; i++) {
        cout << arr3[i] << " ";
    }
    cout << endl;
    cout << "Median of Array 3: " << findMedian(arr3, n3) << endl;

    return 0;
}
