# `This is still under edit`

# todoApp

This is a simple todoApp for my portforio. It has 6 areas, welcome board, today's tasks area, create tasks area,\
upcoming tasks area, done tasks area, and over tasks area. Discription of each area are as followed below.

## how to use it
This app consist of client part, and server part. You need to run `npm start` on client directory,\
and `node server.js` on server directory.

### about client side
You just need to run `npm start` on client directory. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### about server side
Running server.js is all you need to do. Server will run on port 5000.\
If you want to change port, you can change it on const variable on server.js

## What composes this application
As it's explained above, this application consists of 6 parts, welcome board, today's tasks area,\
create tasks area, upcoming tasks area, done tasks area, and over tasks area.

## welcome board
This is just a greeting area. It doesn't have any function. Though it has two buttons, it doesn't work. `It's going to be fixed`

## Today's tasks area
Tasks which deadline is today are shown on this area.

## create tasks area
You can use this area to make a new task. You can create tasks with its deadline, title, and content.\ 
However, its contents are `not` displayed on application. It's going to be fixed.

## upcoming tasks area
Usually, created tasks are displayed here. Tasks are sorted in descending order of time.\
You can delete them, or move it to done tasks area when completing it.

## done tasks area
When you complete tasks, and push `Done button`, they're sent here. You can check completed tasks on here.
However, done tasks can't be deleted. `This is going to be fixed`.

## over tasks area
When you can't complete a task, it'll be moved to here.\
You can check expired tasks here, and do the same action as on upcoming area, delete and done.
