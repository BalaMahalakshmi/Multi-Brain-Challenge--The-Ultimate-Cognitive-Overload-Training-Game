def generate_memory_sequence(level):

    import random

    length = level + 2

    return [
        random.randint(1, 9)
        for _ in range(length)
    ]