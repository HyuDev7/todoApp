# todoApp

This is a simple todoApp for my portforio. It has 6 areas, welcome board, today's tasks area, create tasks area,\
upcoming tasks area, done tasks area, and over tasks area. Discription of each area are as followed below.

シンプルなtodoアプリです。6つのエリアに分かれており、それぞれメッセージエリア、当日タスクを表示するエリア、タスクを生成するエリア、\
タスクが表示されるエリア、終えたタスクが保存されるエリア、超過タスクが保存されるエリアとなっています。\
各エリアの説明は以下に書かれている通りです。

# About version
There are 2 versions of todoApp, stand-alone version, and completed version.\
In main branch, I put a stand-alone version. You can run application locally.\
It's suitable for checking how application works.\
In another version, it requires you to run server, and connect to MongoDb Atlas.\
More information, please jump to another branch, ver_server

リポジトリには２種類のtodoアプリがあります。1つはローカル環境で実行できるバージョンで、もう一方は\
サーバーとの接続が必要なタイプです。ローカルバージョンはアプリの挙動を確かめるのに適しています。\
また、サーバーバージョンはMongoDb Atlasのアカウントが必要になりますが、実際にデータベースに\
データを保存しながら挙動を確認できます。\
詳しい内容は`ver_server`とある、もう一方のブランチにあります。


# `how to use it`
This app consist of only client part. You need to run `npm start` on client directory.\
clientディレクトリ上で`npm start`を実行すると[http://localhost:3000](http://localhost:3000)
上でアプリが起動します。

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## What composes this application
As it's explained above, this application consists of 6 parts, welcome board, today's tasks area,\
create tasks area, upcoming tasks area, done tasks area, and over tasks area.\
上記でも説明した通り、このアプリケーションはメッセージエリア、当日タスクを表示するエリア、タスクを生成するエリア、\
タスクが表示されるエリア、終えたタスクが保存されるエリア、超過タスクが保存されるエリアの6つのエリアで構成されています。

## welcome board
This is just a greeting area. It doesn't have any function. \
シンプルなメッセージエリアです。機能は特にありません。

## Today's tasks area
Tasks which deadline is today are shown on this area.\
期限が当日になっているタスクを表示するエリアです。

## create tasks area
You can use this area to make a new task. You can create tasks with its deadline, title, and content.\
このエリア上で新しいタスクを作ることができます。作る際にはその期限・タイトル・内容を入力することができます。

## upcoming tasks area
Usually, created tasks are displayed here. Tasks are sorted in descending order of time.\
You can delete them, or move it to done tasks area when completing it.\
基本的に作成されたタスクはこのエリアで表示されます。各タスクは降順で並び替えられます。\
タスクを削除したり、完了した際にDoneボタンを押すことで他のエリアに移動させることができます。

## done tasks area
When you complete tasks, and push `Done button`, they're sent here. You can check completed tasks here.\
タスクを終え、Doneボタンを押した際、タスクはこのエリアへ移動します。このエリアでは終えたタスクを確認できるほか、\
タスクの削除やUndoボタンを押すことでタスクを戻すこともできます。

## over tasks area
When you can't complete a task, it'll be moved to here.\
You can check expired tasks here, and do the same action as on upcoming area, delete and done.\
期限までにタスクを終えられなかった場合、タスクはこのエリアへ移動します。ただし、このエリア上でもタスクの削除やDoneボタンを押すことはできます。

