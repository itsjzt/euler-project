(defn fibonacci [till] 
    (loop [fibs '(2 1)]
        (do
            (def next-fib (+ (first fibs) (second fibs)))
            (if (>= next-fib till) 
                fibs
                (recur (conj fibs next-fib))
            )
        )
    )
)

(defn sum [list]
    (loop [sum 0 lst list]
        (if (empty? lst)
            sum
            (recur (+ sum (first lst)) (rest lst) )
        )
    )
)

(println (sum (filter even? (fibonacci 4000000))))


