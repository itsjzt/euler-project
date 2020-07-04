(defn divisible? [divisor, quotient]
    (= (rem divisor quotient) 0)
)

(defn prime? [n]
    (cond
        (= n 1) false
        ; this adds a fast check for 50% of numbers
        (and (not (= n 2)) (even? n)) false
        :else (loop [i 2]
            (def prime-upper-bound (Math/sqrt n))
            (if (> i prime-upper-bound) 
                true
                (if (divisible? n i)
                    false
                    (recur (inc i))
                )
            )
        )
    )
)

(defn find-prime-factors [n]
    (def prime-factor-upper-bound (Math/sqrt n))
    (loop [i 1 factors '()]
        (if (> i factor-upper-bound)
            factors
            (if (and (divisible? n i) (prime? i))
                (recur (inc i) (conj factors i))
                (recur (inc i) factors)
            )
        )
    )
)

(println (first (find-prime-factors 600851475143)))
