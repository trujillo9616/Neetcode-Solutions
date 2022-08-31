// 217. Contains Duplicate
// Easy
// https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least 
// twice in the array, and return false if every element is distinct.

// Brute Force Approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)
const containsDuplicateBF = (nums: number[]) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};

// Sort Approach
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
const containsDuplicateSort = (nums: number[]) => {
  nums.sort((a: number, b: number) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};

// Hash Set Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
const containsDuplicateSet = (nums: number[]) => {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};
