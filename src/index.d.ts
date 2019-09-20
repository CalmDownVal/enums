declare namespace EnumUtils
{
	type EnumValue = number | string
	type EnumLike = { [key: string]: EnumValue }

	/**
	 * Parses the string as a key of the enumeration and returns the corresponding value. Returns
	 * null if the enum does not contain any matching key. The lookup is *case insensitive*.
	 * Exact match is always preferred.
	 * @param Enum the enumeration
	 * @param str the enumeration key
	 */
	export function parse(Enum: EnumLike, str: string): EnumValue | null;

	/**
	 * Returns the key of the enum to which the value corresponds or null if the enum does not
	 * contain any key with the value.
	 * @param Enum the enumeration
	 * @param value the enum value to stringify
	 */
	export function stringify(Enum: EnumLike, value: EnumValue): string | null;

	/**
	 * Checks if value is a member of the enumeration. If so returns it; null otherwise.
	 * @param Enum the enumeration
	 * @param value the value to test
	 */
	export function coerce(Enum: EnumLike, value: any): EnumValue | null;

	/**
	 * Checks if hint is a member of the enumeration. If so returns it. If a string is passed
	 * as hint parsing will be attempted as well. Returns null
	 * @param Enum the enumeration
	 * @param hint the hint to match
	 */
	export function match(Enum: EnumLike, hint: any): EnumValue | null;
}

export = EnumUtils;
