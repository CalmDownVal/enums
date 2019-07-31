export function parse(Enum, str)
{
	const hint = str.trim().toUpperCase();
	const length = hint.length;

	let candidate = null;
	let count = 0;

	for (const key in Enum)
	{
		if (key.length < length)
		{
			continue;
		}

		if (key.toUpperCase().indexOf(hint) !== -1)
		{
			candidate = Enum[key];
			if (key.length === length) // exact match
			{
				return candidate;
			}

			++count;
		}
	}

	return count === 1 ? candidate : null;
}

export function stringify(Enum, value)
{
	for (const key in Enum)
	{
		if (Enum[key] === value)
		{
			return key;
		}
	}

	return null;
}

export function coerce(Enum, value)
{
	for (const key in Enum)
	{
		if (Enum[key] === value)
		{
			return value;
		}
	}

	return null;
}

export function match(Enum, hint)
{
	let result = coerce(Enum, hint);
	if (result === null && typeof hint === 'string')
	{
		result = parse(Enum, hint);
	}

	return result;
}
