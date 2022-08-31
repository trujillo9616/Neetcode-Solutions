# 217. Contains Duplicate
# Easy
# https://leetcode.com/problems/contains-duplicate/

# Given an integer array nums, return true if any value appears at least 
# twice in the array, and return false if every element is distinct.

# Brute Force Approach
# Time Complexity: O(n^2)
# Space Complexity: O(1)
from typing import List


def containsDuplicateBF(self, nums: List[int]) -> bool:
  for i in range(len(nums) - 1):
    for j in range(len(nums)):
      if (nums[i] == nums[j]):
        return True
  return False

# Sort Approach
# Time Complexity: O(nlogn)
# Space Complexity: O(1)
def containsDuplicateSort(self, nums: List[int]) -> bool:
  nums.sort()
  for i in range(len(nums) - 1):
    if (nums[i] == nums[i + 1]):
      return True
  return False

# Hash Set Approach
# Time Complexity: O(n)
# Space Complexity: O(n)
def containsDuplicateSet(self, nums: List[int]) -> bool:
  myset = set()
  for num in nums:
    if num in myset:
      return True
    myset.add(num)
  return False
