def run_cases(cases, Solution, method_name):
    """
    Run test cases for a given method in the Solution class.

    :param cases: List of test cases
    :param Solution: The Solution class containing the method to be tested
    :param method_name: The name of the method to be tested
    """
    solution = Solution()
    for i, (params, expected) in enumerate(cases):
        result = getattr(solution, method_name)(*params)
        if is_equal(result, expected):
            print(f"Test case {i + 1} passed.")
        else:
            print(f"Test case {i + 1} failed: expected {expected}, got {result}")


def is_equal(a, b):
    # if a and b are both float, compare them with a tolerance
    if isinstance(a, float) and isinstance(b, float):
        return abs(a - b) < 1e-5
    return a == b
