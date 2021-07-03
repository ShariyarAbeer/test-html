# Module-3

## Git-scm

### git scm is a source code management system

## File a dukte cd thn space thn .. file name dite hobe

```
cd file name
```

## File theke ber hote or ek dhap pichone jete cd thn space thn .. dite hobe

```
cd ..
```

## Vs code a git a github id setup dear jonno

### Fst tym e sudu eta lagbe pore ar lagbe nah

```
git config --global user.email “your@email.com”
git config --global user.name “your name”
```

## create a new repository

### Github giye fst a ekta repo khulbo thn oi eki repo nam diye nijer pc te ekta file khulbo thn oi file ta vs code open korbo thn nicher cmmnt gula korbo

```
git init //  git initialize kora
git add README.md  or git add .  // . diye all bujay add . mane je sob file ache sob pathano
git commit -m "first commit"  //  commit kora with msg
git remote add origin https://github.com/ShariyarAbeer/[Name of the file].git  // remote file jeta github a ache oitar url add kora
git push -u origin master or git push   // push kora
```

## File edit korar por jodi abar push korte hoy

```
git add .    // edit kora sob file add kora
git commit -m “2nd tym push”   //  commit kora with msg
git push   // github a push kora
```

## Git branch

### git branch create korar age dekte hobe amra kon branch a achi and total koyta branch ache

```
git branch  //   list of branch show korbe
```

## Thn new branch create kore oitay switch korte hobe

```
git checkout -b new-branch   // new branch create hobe and oi new branch a switch hobe
```

## Ki ki kaj korechi and new branch shoho a push korte hobe thn merge korte

```
git status  // dekhe nea ki ki file edit hoise
git add .  // edit hoise ta sob ek shate add kora
git commit -m “push with new branch”  //  commit kora with msg
git push --set-upstream origin new-branch  //  github a new branch create kora and push kora
git checkout main  // new-branch theke ber hoye main branch a jjawa
git merge new-branch  // new-branch main branch er shate merge kora
```

## Group a kaj korar tym a all tym git repo pull kore kaj korte hobe

```
git pull   //  onno kono grp member project a chng kore thakle ta add hoye jabe
```

## Hosting in Github

```
Setting -> Github pages
```

### Or niche scroll korle e paben

```
Pages
```

### Thn source -> select branch -> save

Eta korle kisu khn por ekta link peye jabe oi khane website host hoye gese
So,

```
Setting -> Github pages -> source -> select branch -> save
```

## Or,

```
Pages -> source -> select branch -> save
```
