        document.addEventListener('DOMContentLoaded', function() {
            const openModalBtn = document.getElementById('openModalBtn');
            const closeModalBtn = document.getElementById('closeModalBtn');
            const modalOverlay = document.getElementById('modalOverlay');

            openModalBtn.addEventListener('click', function() {
                modalOverlay.classList.add('active');
            });


            closeModalBtn.addEventListener('click', function() {
                modalOverlay.classList.remove('active');
            });

        });
