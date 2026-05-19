def generate_rhythm_pattern(level):

    import random

    pattern_length = level + 3

    return [
        random.choice(["tap", "pause"])
        for _ in range(pattern_length)
    ]