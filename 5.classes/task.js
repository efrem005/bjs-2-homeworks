class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		this.name = name
		this.releaseDate = releaseDate
		this.pagesCount = pagesCount
		this.state = 100
		this.type = null
	}
	fix() {
		this.state = this.state * 1.5
	}
	set state(newState) {
		if (newState < 0) {
			this._state = 0
		} else if (newState > 100) {
			this._state = 100
		} else {
			this._state = newState
		}
	}
	get state() {
		return this._state
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state, type)
		this.type = "magazine"
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state, type)
		this.author = author
		this.type = "book"
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state, type)
		this.type = "novel"
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state, type)
		this.type = "fantastic"
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state, type)
		this.type = "detective"
	}
}

class Library {
	constructor(name) {
		this.name = name
		this.books = []
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null
	}

	giveBookByName(bookName) {
		const book = this.books.find(book => book.name === bookName)
		if (!book) return null

		this.books = this.books.filter(b => b !== book)
		return book
	}
}

class Student {
	constructor(name) {
		this.name = name
		this.marks = {}
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			console.error("Оценка не соответствует допустимым значениям")
			return
		}

		if (!this.marks[subject]) {
			this.marks[subject] = []
		}

		return this.marks[subject].push(mark)
	}

	getAverageBySubject(subject) {
		const subjectMarks = this.marks[subject]

		if (!subjectMarks || subjectMarks.length === 0) {
			return 0
		}

		const sum = subjectMarks.reduce((total, mark) => total + mark, 0)
		return sum / subjectMarks.length
	}

	getAverage() {
		const subjects = Object.keys(this.marks)

		if (subjects.length === 0) {
			return 0
		}

		const totalSum = subjects.reduce((sum, subject) => {
			return sum + this.getAverageBySubject(subject)
		}, 0)

		return totalSum / subjects.length
	}
}