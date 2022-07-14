Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario Outline: Today is or is not Friday
    Given today is "<day>"
    When I ask whether it's Friday yet
    Then I should be told "<answer>"

    Examples:
      | day            | answer |
      | Friday         | TGIF   |
      | Sunday         | Nope   |
      | anything else! | Invalid Day   |

  Scenario Outline: I made my own calculator
    Given Number 1 
    And And Number 2 
    When I ask to add these numbers
    Then I should get 3

    Examples:
      | number1 | number2   | answer |
      | 1       | 2         | 3   |
      | 2       | 2         | 3   |