def calculate_score(data):

    memory = data["memory_accuracy"]

    rhythm = data["rhythm_accuracy"]

    reaction = data["reaction_speed"]

    score = (
        memory * 4 +
        rhythm * 3 +
        (100 - reaction * 100)
    )

    return int(score)