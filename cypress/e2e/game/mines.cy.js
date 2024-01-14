/// <reference types="cypress" />

describe('Mines', () => {
	beforeEach('should start the game', () => {
		cy.visit('/')
		cy.get('button').contains('Play').click()
	})

	it('should mark a cell as a mine', () => {
		cy.contains('Mines to discover: 30').should('exist')
		cy.get('button[id="cell-0-0"]').rightclick()
		cy.contains('Mines to discover: 29').should('exist')
	})

	it('should mark a cell as a possible mine', () => {
		cy.contains('Mines to discover: 30').should('exist')
		cy.get('button[id="cell-0-0"]').rightclick().rightclick()
		cy.contains('Mines to discover: 29').should('exist')
	})
})
