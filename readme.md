This plunkr is used to demonstrate jsPDF download.
I have added image, html content as part of the document. There are two images one is logo of DELL and another one is a highchart.
Here is the problem of this Plunkr based on jsPDF version: 
1. When jsPDF version = 1.2.61
> Pdf download works fine for all browser except IE, It ignores html text content in dowloaded pdf. 

2. When jsPDF version = 1.3.2
> In Adobe viewer it gives error 110.

If anybody has came across such issue then please try to fix it.

Note: What I guess is that the image that I am using in top(dell logo) is causing the issue, as when I remove that there is no error in adobe reader.

I have posted a question in StackOverFlow for tracking purpose:
http://stackoverflow.com/questions/42226002/jspdf-not-rendering-html-element-with-v-1-2-61ie-giving-110-error-in-adobe-v

Update: The issue has been resolved, my guess was wrong about the issue in logo.
It was actually PNG image compression issue which the jsPDF was originally having but thanks to **@Pe46dro** for help.
Please find the related open issue in github: 
https://github.com/MrRio/jsPDF/issues/862