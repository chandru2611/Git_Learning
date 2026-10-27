# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Locators.spec.js >> Locator Playwright
- Location: tests\Locators.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]:
        - generic [ref=e25] [cursor=pointer]: Forms
        - list [ref=e38]:
          - listitem [ref=e39] [cursor=pointer]:
            - link "Practice Form" [ref=e40]:
              - /url: /automation-practice-form
      - generic [ref=e43]: Alerts, Frame & Windows
      - generic [ref=e55]: Widgets
      - generic [ref=e68]: Interactions
      - generic [ref=e80]: Book Store Application
    - generic [ref=e93]:
      - heading "Practice Form" [level=1] [ref=e94]
      - heading "Student Registration Form" [level=5] [ref=e95]
      - generic [ref=e96]:
        - generic [ref=e97]:
          - generic [ref=e98]: Name
          - textbox "First Name" [ref=e101]: Chandru
          - textbox "Last Name" [ref=e103]: S
        - generic [ref=e104]:
          - generic [ref=e105]: Email
          - textbox "name@example.com" [ref=e108]: dummy93@gmail.com
        - generic [ref=e109]:
          - generic [ref=e110]: Gender
          - generic [ref=e111]:
            - generic [ref=e112]:
              - radio "Male" [checked] [ref=e113]
              - generic [ref=e114]: Male
            - generic [ref=e115]:
              - radio "Female" [ref=e116]
              - generic [ref=e117]: Female
            - generic [ref=e118]:
              - radio "Other" [ref=e119]
              - generic [ref=e120]: Other
        - generic [ref=e121]:
          - generic [ref=e122]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=e125]: "9876543210"
        - generic [ref=e126]:
          - generic [ref=e127]: Date of Birth
          - textbox [ref=e132]: 27 Oct 2026
        - generic [ref=e133]:
          - generic [ref=e134]: Subjects
          - generic [ref=e137]:
            - log [ref=e139]: 1 result available for search term Maths.Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu, press Tab to select the option and exit the menu.
            - combobox [expanded] [active] [ref=e143]: Maths
            - listbox [ref=e147]:
              - option "Maths" [ref=e148]
        - generic [ref=e149]:
          - generic [ref=e150]: Hobbies
          - generic [ref=e152]:
            - generic [ref=e153]:
              - checkbox "Sports" [ref=e154]
              - generic [ref=e155]: Sports
            - generic [ref=e156]:
              - checkbox "Reading" [ref=e157]
              - generic [ref=e158]: Reading
            - generic [ref=e159]:
              - checkbox "Music" [ref=e160]
              - generic [ref=e161]: Music
        - generic [ref=e162]:
          - generic [ref=e163]: Picture
          - button "Choose File" [ref=e166] [cursor=pointer]
        - generic [ref=e167]:
          - generic [ref=e168]: Current Address
          - textbox "Current Address" [ref=e171]
        - generic [ref=e172]:
          - generic [ref=e173]: State and City
          - generic [ref=e176]:
            - log [ref=e178]
            - generic [ref=e180]:
              - generic [ref=e181]: Select State
              - combobox [ref=e183]
          - generic [ref=e189]:
            - generic:
              - log
              - generic: Select City
        - button "Submit" [ref=e192] [cursor=pointer]
  - contentinfo [ref=e199]:
    - generic [ref=e200]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```