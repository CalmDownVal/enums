/* eslint-env node, mocha */
import * as assert from 'assert';
import * as enums from '../index.mjs';

const Enum =
{
	ITEM_ONE : 1,
	ITEM_TWO : 2
};

describe('stringify', () =>
{
	it('should return enum values as their keys', () =>
	{
		assert.equal(
			enums.stringify(Enum, Enum.ITEM_ONE),
			'ITEM_ONE',
			'does not match the expected key');
	});

	it('should return null for values not belonging to the enum', () =>
	{
		assert.equal(
			enums.stringify(Enum, 123),
			null,
			'does not return null');
	});
});

describe('parse', () =>
{
	it('should return the correct member - exact match', () =>
	{
		assert.equal(
			enums.parse(Enum, 'ITEM_ONE'),
			Enum.ITEM_ONE,
			'does not return the expected value');
	});

	it('should return the correct member - partial match', () =>
	{
		assert.equal(
			enums.parse(Enum, 'ONE'),
			Enum.ITEM_ONE,
			'does not return the expected value');
	});

	it('should return the correct member - different letter case', () =>
	{
		assert.equal(
			enums.parse(Enum, 'ItEm_OnE'),
			Enum.ITEM_ONE,
			'does not return the expected value');
	});

	it('should return null when no match is found', () =>
	{
		assert.equal(
			enums.parse(Enum, 'BAD_KEY'),
			null,
			'does not return null');
	});

	it('should return null when the match is ambiguous', () =>
	{
		assert.equal(
			enums.parse(Enum, 'ITEM_'),
			null,
			'does not return null');
	});
});

describe('coerce', () =>
{
	it('should return the value unchanged if it is a member', () =>
	{
		assert.equal(
			enums.coerce(Enum, 1),
			Enum.ITEM_ONE,
			'does not return the expected value');
	});

	it('should return null when the value is not a member', () =>
	{
		assert.equal(
			enums.coerce(Enum, 42),
			null,
			'does not return null');
	});
});

describe('match', () =>
{
	it('should try to parse unmatched strings', () =>
	{
		assert.equal(
			enums.match(Enum, 'ITEM_ONE'),
			Enum.ITEM_ONE,
			'does not return the expected value');
	});
});
