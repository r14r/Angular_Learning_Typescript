<h1>Angular Typescript Workshop</h1>

![angular_github_logo](https://avatars0.githubusercontent.com/u/139426?s=200&v=4 "Angular Logo")

[AngularJS Docs](https://docs.angularjs.org/api) <bold>|</bold>
[TypeScript Docs](https://www.typescriptlang.org/docs/home.html) <bold>|</bold>
[JavaScript Docs](https://developer.mozilla.org/de/docs/Web/JavaScript)

<h2>Allgemeines</h2>
Typescript wurde aus JavaScript und C# entworfen


<h2>TypeScript</h2>

<h3>Typen in TypeScript</h3>

Die Basistypen von TS sind gleich wie die von JavaScript ([Erweiterte Liste von TS-Typen](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
)<br/>

<ul>
    <li>Bool (ein Boolesche Wert)</li>
    <li>Number (eine Zahl)</li>
    <li>String (eine Zeichenfolge)</li>
    <li>Array (eine Liste von Objekten)</li>
    <li>Any (also Undefinierter Typ, kann alles sein)</li>    
</ul>


<h3>Variablentypen in TypeScript deklarieren</h3>

Eine Variable kann ohne Typ deklariert werden, sie übernimmt dann direkt den Typ des zugewiesenen Wertes<br/>
In folgendem Beispiel übernimmt Sie den Typen von '5' also 'number':

```typescript 
let myVar = 5
```
</br>

Mit Typ werden Variablen so definiert:

```typescript 
let isDone: boolean = false;
```
</br>


Je nachdem wie man eine Variable deklariert, ist sie in verschiedenen Scopes ersichtlich:

Globale Variable:
```typescript 
a: string = "this will be visible global"
```
</br>

Block-Scope gebundene Variable:
```typescript 
let a: string = "this will be visible in block scope"
```
</br>

Function-Scope gebundene Variable:
```typescript 
var a: string = "this will be visible in function scope"
```
</br>

Konstante (Im Gegensatz zu einer Variable muss eine Konstante jedoch bei ihrer Deklaration unmittelbar mit einem Wert initialisiert werden)
```typescript 
const a: string = "Das ist eine Konstante"
```
</br>


<h3>Operatoren</h3>
Folgende Operatoren existieren in TS sowie auch JS:
```typescript
Content-Erweiterung erfassen
```
</br>

<h3>Klassen</h3>
Der Basic-Syntax für Klassen in TS (auch JS) ist wiefolgt:

```typescript
export class MeineKlasse {
    // Rumpf der Klasse
    // hier werden Instanzvariablen, Eigenschaften
    // und Methoden definiert
}
```
</br>

<h3>Methoden</h3>
Beispiel in JavaScript/TypeScript:

```typescript 
```
</br>

<h3>Instanzvariablen und Eigenschaften</h3>
Beispiel in JavaScript/TypeScript:

```typescript
```
</br>

<h3>Klassen (Beispiel mit Konstruktor)</h3>
Beispiel in JavaScript/TypeScript:

```typescript 
```
</br>


<h3>Arrays und Objects</h3>
Beispiel in JavaScript/TypeScript:

```typescript 
```
</br>

<h2>Entwicklungsumgebung</h2>
Es wird Visual Studio Code empfohlen
Git / Github verwenden


<h2>Angular Framework</h2>
Open Source JS-Framework
Angular JS hatte einige Schwachstellen die durch Angular behoben wurden.
September 2016 veröffentlicht durch Google.

<h3>Availability</h3>
PWA
Angular ist Cross Plattform tauglich - es läuft auf allen Browsern (also Computer, Tablet, Smartphones)
1x Programmieren, überall verfügbar

<h3>PWA Grundsätze</h3>
- Offline verfügbar
- Installierbar


<h3>Architektur Node</h3>
NodeJS
<ul>
    <li>NPM</li>
<li>Angular CLI</li>
    <ul>
<li>webpack</li>
<li>ngc (Angular Compiler) => Sorgt auch für Schnelligkeit der Applikation</li>
<li>TypeScript </li>
    </ul>
</ul>
<br/>

<h3>Angular Architektur</h3>
Angular ist ein Component basiertes JS-Framework<br/>
<ul>
    <li>View (Html)</li>
    <li>Code (Controller / JS)</li>
    <li>Stylesheet (Scss wird empfohlen)
    <ul>
        <li>Cleaner</li>
        <li>Variablen</li>
        <li>Logik</li>
        <li>Spezfile</li>
    </ul> 
    </li>
</ul>
<br/>

<ul>
    <li> Html Property-Binding zu Controller</li>
    <li>Eventbinding</li>
    <li> Alles durch Angular gesteuert (Properties / Events gebunden)</li>
</ul>
<br/>

In Angular wird die Klasse (Controller Component) geladen und HTML wird durch sie geladen ("berechnet")
<br/>
Oberste Component ist immer die App-Component
<br/>
Components werden verschachtelt und erweitert, endlos (wie Treeview)
<br/>
Allgemeine Komponenten in einem 'Shared'-Ordner auf oberster Ebene ablegen
<br/>

<h3>Styleguide</h3>
Wichtig Kleinschreibung da sonst auf Mac nicht kompilierbar<br/>
Beispiele: <br/>
<ul>
    <li>app.component.ts</li>
    <li>my-apps-homescreen.component.ts</li>
</ul>
<br/>

<h3>Decorators</h3>

Beispiel von den Decorators

```typescript
@Component({
  selector: 'app-bank-account',
  inputs: ['bankName', 'id: account-id'],
  template: `
    Bank Name: {{ bankName }}
    Account Id: {{ id }}
  `
})
```

Decorators stellen metadaten dar, welche der Komponente sagen, wie sie instanziiert wird und sich zu verhalten hat.
<ul>
    <li> templateUrl => für templateUrl</li>
    <li>styleUrls => als Array Stylesheets verlinken</li>
    <li>selector => Präfix wichtig, eindeutig setzen z.B. "CTS" (keine Namespaces, auch hilfreich für AutoImport)</li>
</ul>

<h3>Binding</h3>
Alles ist public<br/>
Bindings werden mit eckigen Klammern geschrieben<br/>
Testausgaben werden in doppelt geschweiften Klammern geschrieben (wie React {{ Obj.Prop }}) - à la 'innerHtml'<br/>


<h4>Property Binding</h4>

Es werden jeweils die Properties aus dem .ts-File ins Markdown abgefüllt. </br>
Hier verwendet "titletext" aus dem .ts-File die <bold>öffentliche</bold> Variable 'titletext' <br/>
und 'Name' die ebenso öffentliche Variable 'Name' aus dem selben .ts-File. <br/>

```html
<h1>Begrüssung</h1> 
<p [title]="titletext">  {{ Name }} </p>
```


<h4>Event Binding</h4>
Functions müssen innerhalb <bold>"this"</bold> verwenden.
Hier verwendet "click" die aus dem .ts-File stammende <bold>öffentliche</bold> Funktion 'changeNameClick' <br/>

```html 
<button type="button" (click)="changeNameClick()">clickme</button>
```

<h4>*ngIf</h4>

Hier verwendet "boolWert" die aus dem .ts-File stammende <bold>öffentliche</bold> Variable 'boolWert' <br/>

```html
<div *ngIf="boolWert">Man sieht mich nur wenn boolWert = true ist.</div>
```


<h4>*ngFor</h4>

```html 
<div *ngFor="let name of namenArray"><{{name}}<div>
```


<h4>for in / for of</h4>
<pre>for of: Iteriert wie in foreach von C#</pre><br/>
<pre>for in: Iteriert durch Object.keys(obj)</pre><br/>


<h2>Angular Services</h2>

<h3>Injection</h3>
Services werden in Components injected<br/>
Services bzw. die Komponenten können sich dann untereinander austauschen<br/>
AppModule muss in Provider-Array alle Services enthalten.<br/>

<h4>Create Service File</h4>
<pre>ng generate service MemoryCalc</pre><br/>

<h4>Vor  </h4>

<h4>Angular Service Injecton</h4>
Beispiel für Injectable
```html @Injectable({ providedIn: 'root' })

<h4>Angular HttpClient</h4>
Beispiel der Verwendung des HttpClient-Services für Requests


[Mehr Infos zu HttpClient](https://angular.io/guide/http)

<h4>Beispiel eines Services</h4>

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DateTime } from '../models/date-time';

@Injectable({ providedIn: 'root' })
export class DateTimeService {
    constructor(private httpClient: HttpClient) { }

    getDateTime(): Observable<Date> {
        return this.httpClient.get<DateTime>('http://date.jsontest.com/').pipe(
            map(x => new Date(`${x.date} ${x.time}`))
        );
    }
}
```

<h4>Verwenden eines Services</h4>

Hier veranschaulicht durch Verwendung des Konstruktors (Instanziierung des Services) und der <br/>
Lifecycle-Methode ngOnInit:

```typescript
  constructor(private dateTimeService: DateTimeService) { }

  ngOnInit(): void {
        this.dateTimeService.getDateTime().subscribe(date => this.datetime = date.toISOString()
  }
```

<h4>Angular Lifecycle-Hooks</h4>

[Mehr Lifecycle-Hooks!](https://angular.io/guide/lifecycle-hooks)

Beispiel ngOnInit:

```javascript
    import { Component, OnInit } from '@angular/core';

    ngOnInit(): void {
        /// code
    }
```

<h2>Shortcuts</h2>

<h3>Neue Komponente automatisch erstellen</h3>
<pre>ng generate component MyCom</pre>

<h3>Starten von App</h3>
<pre>ng serve --aot</pre><br/>

<desc>Port ist standardmässig 4200</desc><br/>
<desc>Erstellt Code der das HTML erstellt ahead of time</desc>

<h3>Veröffentlichen / Build</h3>
<pre>ng build --prod</pre><br/>
<desc>unbedingt --prod verwenden, da sonst der dev build verwendet wird</desc>

