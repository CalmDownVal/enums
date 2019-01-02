export function parse(_enum, str)
{
	const
		hint = str.trim().toUpperCase(),
		length = hint.length;

	let match = null,
		count = 0;

	for (const key in _enum)
	{
		if (key.length < length)
		{
			continue;
		}

		if (key.toUpperCase().indexOf(hint) !== -1)
		{
			match = _enum[key];

			if (key.length === length) // exact match
			{
				return match;
			}

			++count;
		}
	}

	return count === 1 ? match : null;
}

export function stringify(_enum, value)
{
	for (const key in _enum)
	{
		if (_enum[key] === value)
		{
			return key;
		}
	}
	return null;
}

export function coerce(_enum, value)
{
	for (const key in _enum)
	{
		if (_enum[key] === value)
		{
			return value;
		}
	}

	return null;
}

export function match(_enum, hint)
{
	let result = coerce(_enum, hint);
	if (result === null && typeof hint === 'string')
	{
		result = parse(_enum, hint);
	}

	return result;
}
