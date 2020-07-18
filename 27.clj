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

(defn quadratic-prime-eq [n a b] 
    (+ b (* a  n ) (* n n))
)